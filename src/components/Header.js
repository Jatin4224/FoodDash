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
      <div className="container mx-auto py-4 px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="logo-container mb-4 md:mb-0">
          <img className="w-28" src={LOGO_URL} alt="Logo" />
        </div>
        <div className="flex items-center space-x-4 md:space-x-8">
          <div className="flex items-center">
            <span className="text-gray-700 mr-2">Online Status:</span>
            <span className="status-emoji">
              {onlineStatus ? "🟢🤗" : "🔴😟"}
            </span>
          </div>
          <Link
            to="/"
            className="text-gray-700 hover:font-bold hover:text-yellow-350 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:font-bold hover:text-yellow-350 transition duration-300"
          >
            About us
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:font-bold hover:text-yellow-350 transition duration-300"
          >
            Contact Us
          </Link>
          <Link
            to="/grocery"
            className="text-gray-700 hover:font-bold hover:text-yellow-350 transition duration-300"
          >
            Grocery
          </Link>
          <div className="relative">
            <Link
              to="/cart"
              className="text-gray-700 hover:font-bold hover:text-yellow-350 transition duration-300"
            >
              Cart ({cartItems.length} items)
            </Link>
          </div>
          <button
            className="bg-yellow-500 text-white px-2 py-2 rounded-md shadow-md hover:bg-yellow-600 transition duration-300"
            onClick={() => {
              setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
            }}
          >
            {btnNameReact}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
