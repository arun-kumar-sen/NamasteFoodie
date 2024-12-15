import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState(true);
  const isOnline = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  // SUBSCRIBING to a store via SELECTOR (its just a hook inside react)
  const cartItems = useSelector((store) => store?.cart?.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between p-4 m-2 bg-gray-100 shadow-md align shadow-xl">
      <div className="logo-container">
        <img className="w-16" src={LOGO_URL} alt="Web app logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="px-4">Online Status : {isOnline ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="px-4">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="px-4">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to={"/cart"}>Cart- ({cartItems?.length})</Link>
          </li>
          <button
            onClick={() => {
              setBtnName(!btnName); //Trigger the re-render the Header component
            }}
            className="login"
          >
            {btnName ? "Login" : "Logout"}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
