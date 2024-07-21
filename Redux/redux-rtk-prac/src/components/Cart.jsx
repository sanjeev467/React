import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const items = useSelector((state) => state.cart.items);
  console.log(items);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
