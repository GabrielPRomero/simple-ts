import React from "react";
import pizzas from "../data/pizzas.json";
import  PizzaComponent  from "./Pizza";
import AppCSS from "./App.module.css";
import PizzaSVG from "../svg/pizza.svg";
import Cart from "./Cart";
import AppStateProvider from "./AppState";
import  SpecialOffer  from "./SpecialOffer";

const App = () => {
  const specialOffePizza = pizzas.find((pizza) => pizza.specialOffer);
  return (
    <AppStateProvider>
      <div className={AppCSS.container}>
        <div className={AppCSS.header}>
          <PizzaSVG width={120} height={120} />
          <div className={AppCSS.siteTitle}>Delicious Pizza</div>
          <Cart />
        </div>
        {specialOffePizza && <SpecialOffer pizza={specialOffePizza} />}
        <ul className={AppCSS.pizzaList}>
          {pizzas.map((pizza) => (
            <PizzaComponent key={pizza.id} pizza={pizza} />
          ))}
        </ul>
      </div>
    </AppStateProvider>
  );
};

export default App;
