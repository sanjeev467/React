import React from "react";
import "../assets/Item.css";
import myImage from "../assets/react.svg";
import { useDispatch } from "react-redux";
import { addItem } from "../slices/cartSlice";

const Item = (props) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addItem(props.id, props.name, props.price));
  };
  return (
    <div className="item-card">
      <h2>Item Name: {props.name}</h2>
      <h2>Item price: {props.price}</h2>
      <img src={myImage} />
      <p>
        Lorem ipsum dolor sit amet consectetur,
        <br /> adipisicing elit. Mollitia, distinctio.
      </p>
      <button onClick={handleAddToCart}>Add To Cart</button>
    </div>
  );
};

export default Item;
