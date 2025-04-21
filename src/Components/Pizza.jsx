import React from "react";

const Pizza = ({ pizzaObj }) => {
  return (
    <>
      <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
        <img src={pizzaObj.photoName} alt="" />
        <span className="">{pizzaObj.name}</span>
        <p className="">{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </li>
    </>
  );
};

export default Pizza;
