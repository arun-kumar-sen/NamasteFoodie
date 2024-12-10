import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState(true);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo-image" src={LOGO_URL} alt="Web app logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
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
