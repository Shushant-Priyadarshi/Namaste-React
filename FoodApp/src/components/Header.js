import {logo_URL} from "../utils/constants";

const Header = () => {
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
          </ul>
        </div>
      </div>
    );
  };
  
export default Header;