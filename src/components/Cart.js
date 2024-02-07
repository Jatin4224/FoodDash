import React from "react";

const Cart = () => {
  return (
    <div className="fixed bottom-0 right-0 w-full md:w-96 bg-white border-t border-gray-200 shadow-xl">
      <div className="p-4">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        {/* Cart items can be rendered here */}
        {/* Example: */}
        {/* <CartItem /> */}
      </div>
      <div className="p-4 bg-gray-100">
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold">Total:</p>
          <p className="text-lg font-semibold">$100</p>
        </div>
        <button className="w-full py-2 mt-4 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition duration-300">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
