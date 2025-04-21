import React from "react";
import Pizza from "./Pizza";

const Menu = ({ pizzaData }) => {
  const pizzas = pizzaData;
  //   const pizzas = false;
  const isMenuReady = pizzas.length;

  return (
    <>
      <main className="menu">
        <h2>Our Menu</h2>

        {isMenuReady > 0 ? (
          <>
            <p>
              Authentic Italian cuisine. 6 creative dishes to choose from. All
              from our stone oven , all organic , all delicious.
            </p>
            <ul className="pizzas">
              {pizzaData.map((pizza, index) => (
                <Pizza pizzaObj={pizza} key={index} />
              ))}
            </ul>
          </>
        ) : (
          <p style={{ color: "red", fontSize: "1.6rem" }}>
            📢👉 Sorry for now! as currently , we're working on menu.🍽️
          </p>
        )}

        {/* <Pizza
            name="Pizza Spinaci"
            ingredients="Tomato, mozarella, spinach, and ricotta cheese"
            photoName="./pizzas/spinaci.jpg"
            price={100}
          />
  
          <Pizza
            name="Pizza Funghi"
            ingredients="Tomato, mozarella, mushrooms, and onion"
            photoName="./pizzas/funghi.jpg"
            price={100}
          /> */}
      </main>
    </>
  );
};

export default Menu;
