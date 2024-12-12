import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState(true);
  const isOnline = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo-image" src={LOGO_URL} alt="Web app logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status : {isOnline ? "✅" : "🔴"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li>
            <Link>Cart</Link>
          </li>
          <button
            onClick={() => {
              setBtnName(!btnName); //Trigger the re-render the Header component
            }}
            className="login"
          >
            {btnName ? "Login" : "Logout"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
