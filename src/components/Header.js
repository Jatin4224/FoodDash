import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="bg-white shadow-lg">
      <div className="container mx-auto py-4 px-6 flex items-center justify-between">
        <div className="logo-container shadow-lg hover:bg-gray-600">
          <img
            className="w-28 shadow-lg rounded-lg"
            src={LOGO_URL}
            alt="Logo"
          />
        </div>
        <ul className="flex items-center space-x-8 ">
          <li className="online-status flex items-center">
            Online Status:{" "}
            <span className="status-emoji">
              {onlineStatus ? "🟢🤗" : "🔴😟"}
            </span>
          </li>
          <li>
            <Link
              to="/"
              className="text-gray-700 hover:font-bold hover:text-yellow-350 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-700 hover:font-bold hover:text-yellow-350 transition duration-300"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-gray-700 hover:font-bold hover:text-yellow-350 transition duration-300"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/grocery"
              className="text-gray-700 hover:font-bold hover:text-yellow-350 transition duration-300"
            >
              Grocery
            </Link>
          </li>
          <li className="relative">
            <Link
              to="/cart"
              className="text-gray-700 hover:font-bold hover:text-yellow-350 transition duration-300"
            >
              Cart ({cartItems.length} items)
            </Link>
          </li>
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-600 transition duration-300"
            onClick={() => {
              setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
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
