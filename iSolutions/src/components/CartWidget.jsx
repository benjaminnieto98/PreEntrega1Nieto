import React from "react";
import { BsFillBagFill } from "react-icons/bs";

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <i className="bag"><BsFillBagFill /></i>
      <span className="notification">3</span>
    </div>
  );
};

export default CartWidget;
