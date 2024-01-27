import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  //login/logout feature
  // let btnName = "Login";

  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li class="online-status">
            Online Status:
            <span class="status-emoji">{onlineStatus ? "🟢🤗" : "🔴😟"}</span>
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
