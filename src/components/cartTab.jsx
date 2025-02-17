import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItems from "./cartItems"; // Make sure this is the correct import
import { toggleStatusTab } from "../store/cart";

const CartTab = () => {
  const carts = useSelector((store) => store.cart.items);
  const statusTab = useSelector((store) => store.cart.statusTab); // Fix "Store" to "store"
  const dispatch = useDispatch();
  // Handle closing the cart tab
  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab()); // Ensure you're calling the action correctly
  };

  const handleCheckout = () => {
    alert(
      `Checkout successful! Thank you for your purchase :). Have A Nice Day !`
    );
  };

  return (
    <div
      className={`fixed top-0 right-0 pb-16 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] transform transition-transform duration-500 ${
        statusTab === false ? "translate-x-full" : "translate-x-0"
      }`}
    >
      <h2 className="p-5 text-white text-2xl">Shopping Cart</h2>

      <div className="p-5 overflow-y-auto">
        {/* Render cart items */}
        {carts.length > 0 ? (
          carts.map((item, key) => <CartItems key={key} data={item} />)
        ) : (
          <p className="text-white">Your cart is empty.</p>
        )}
      </div>

      {/* Action buttons */}
      <div className="grid grid-cols-2 gap-3 p-5">
        <button
          className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800"
          onClick={handleCloseTabCart}
        >
          CLOSE
        </button>
        <button
          className="bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-500"
          onClick={handleCheckout}
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartTab;
