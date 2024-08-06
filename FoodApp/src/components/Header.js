import { Link } from "react-router-dom";
import {logo_URL} from "../utils/constants";
import {useState} from "react"

const Header = () => {
    return (
      <div className="flex justify-between border-b-2 font-semibold shadow-xl">
        <div className="logo-container">
          <Link to="/">
          <img
            className="logo w-24 cursor-pointer"
            src={logo_URL}
            alt="logo"
          />
          </Link>
          
        </div>
        <div className="link-container p-8">
          <ul className="links flex gap-10 text-xl ">
            <li className="hover:scale-105 duration-500"><Link to="/">Home</Link></li>
            <li className="hover:scale-105 duration-500"> <Link to="/about">About Us</Link></li>
            <li className="hover:scale-105 duration-500"> <Link to="/contact">Contact Us</Link></li>
            <li className="hover:scale-105 duration-500"> <Link to="/cart"> Cart</Link></li>
            
          </ul>
        </div>
       
      </div>
    );
  };
  
export default Header;