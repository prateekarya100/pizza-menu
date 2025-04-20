import React from "react";

const Pizza = (props) => {
  return (
    <>
      <li className="pizza">
        <img src={props.pizzaObj.photoName} alt="" />
        <span className="">{props.pizzaObj.name}</span>
        <p className="">{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </li>
    </>
  );
};

export default Pizza;
