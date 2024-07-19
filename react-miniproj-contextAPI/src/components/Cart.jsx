import React, { useContext } from "react";
import { CartContext } from "../context/Cart";

const Cart = () => {
  const cart = useContext(CartContext);
  const total = cart.items.reduce((a, b) => a + b.price, 0);
  return (
    <div>
      <h2>Cart</h2>

      {cart &&
        cart.items.map((item) => (
          <li>
            {item.name} - {item.price}
          </li>
        ))}

      <h2>Total: {total}</h2>
    </div>
  );
};

export default Cart;
