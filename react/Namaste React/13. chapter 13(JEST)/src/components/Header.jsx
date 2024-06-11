import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  useEffect(()=>{
  },[btnName])

  const cartItems = useSelector((store)=>store.cart.items)
  console.log(cartItems);

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
          <li><Link to={"/cart"}> cart({cartItems.length} items)</Link></li>
          
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
