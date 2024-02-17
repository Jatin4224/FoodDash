import React from "react";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center mx-auto  p-4">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 bg-gray-200">
          <h1 className="text-grey font-bold">Items in Cart</h1>
          <button
            className="px-4 py-2 bg-red-600 text-grey font-semibold rounded-lg hover:bg-grey-500"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>

        {cartItems.length === 0 && (
          <div className="p-4 text-center text-gray-600">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
              className="w-40 h-50 text-center"
            />
            Your card is empty!!
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="divide-y divide-gray-200">
            <ItemList items={cartItems} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
