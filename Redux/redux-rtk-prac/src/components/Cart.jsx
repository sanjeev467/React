import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const items = useSelector((state) => state.cart.items);
  // console.log(items);
  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        <h3>No of Items: {items.length}</h3>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
      <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
}

export default Cart;
