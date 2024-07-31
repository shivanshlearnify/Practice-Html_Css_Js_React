import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  useEffect(()=>{
  },[btnName])
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to={"/"}> Home</Link></li>
          <li><Link to={"/about"}> About Us</Link></li>
          <li><Link to={"/contact"}> Contact Us</Link></li>
          <li><Link to={"/grocery"}> Grocery</Link></li>
          
          <button
            onClick={() => {
              btnName === "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
