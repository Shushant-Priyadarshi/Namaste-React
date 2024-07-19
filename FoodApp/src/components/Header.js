import { Link } from "react-router-dom";
import {logo_URL} from "../utils/constants";
import {useState} from "react"

const Header = () => {
  let [login,setLogin] =useState("Login")
  const handleLogin=()=>{
    login==="Login"?setLogin("Logout"):setLogin("Login");
  }
    return (
      <div className="header">
        <div className="logo-container">
          <Link to="/">
          <img
            className="logo"
            src={logo_URL}
            alt="logo"
          />
          </Link>
          
        </div>
        <div className="link-container">
          <ul className="links">
            <li><Link to="/">Home</Link></li>
            <li> <Link to="/about">About Us</Link></li>
            <li> <Link to="/contact">Contact Us</Link></li>
            <li> <Link to="/cart"> Cart</Link></li>
            <button onClick={handleLogin}>{login}</button>
          </ul>
        </div>
       
      </div>
    );
  };
  
export default Header;