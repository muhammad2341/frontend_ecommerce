import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { toggleStatusTab } from "../store/cart";

const Header = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);
  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  };

  return (
    <header className="flex justify-between items-center mt-2">
      <Link to="/HomePage" className="text-xl font-semibold" />
      <div
        className=" flex justify-center items-center relative cursor-pointer"
        onClick={handleOpenTabCart}
      >
        <FontAwesomeIcon icon={faBasketShopping} size="3x" />
        <span className="absolute top-1 right-11 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center">
          {totalQuantity > 0 ? totalQuantity : 0}
        </span>
      </div>
    </header>
  );
};

export default Header;
