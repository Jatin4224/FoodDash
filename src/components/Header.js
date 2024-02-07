import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  //login/logout feature
  // let btnName = "Login";

  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  //subscribing to the store using a selector

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li className="online-status">
            Online Status:
            <span className="status-emoji">
              {onlineStatus ? "🟢🤗" : "🔴😟"}
            </span>
          </li>
          <li className="navigation-link">
            <Link to="/">Home</Link>
          </li>
          <li className="navigation-link">
            <Link to="/about">About us</Link>
          </li>
          <li className="navigation-link">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="navigation-link">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="navigation-link">
            <Link to="/cart"> Cart ({cartItems.length} items)</Link>
          </li>

          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
