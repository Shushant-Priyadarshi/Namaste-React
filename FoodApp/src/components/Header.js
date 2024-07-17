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
          <img
            className="logo"
            src={logo_URL}
            alt="logo"
          />
        </div>
        <div className="link-container">
          <ul className="links">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button onClick={handleLogin}>{login}</button>
          </ul>
        </div>
      </div>
    );
  };
  
export default Header;