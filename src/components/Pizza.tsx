import React, { useContext } from "react";
import { Pizza } from "../types";
import { AddToCartProps, withAddToCart } from "./AddToCart";
import { useDispatch } from "./AppState";
import PizzaCSS from "./Pizza.module.css";

interface Props extends AddToCartProps {
  pizza: Pizza;
}

const PizzaComponent: React.FC<Props> = ({ pizza, addToCart }) => {
  const handleAddToCartClick = () => {
    addToCart({ ...pizza });
  };
  return (
    <li className={PizzaCSS.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
      <button type="button" onClick={handleAddToCartClick}>
        Add to Cart
      </button>
    </li>
  );
};

export default withAddToCart(PizzaComponent);
