import "./index.css";
import Pizza from "./Components/Pizza";
import Header from "./Components/Header";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Menu() {
  return (
    <>
      <main className="menu">
        <h2>Our Menu</h2>
        <ul className="pizzas">
          {pizzaData.map((pizza, index) => (
            <Pizza pizzaObj={pizza} key={index} />
          ))}
        </ul>

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
}

// function Pizza(props) {
//   return (
//     <>
//       <li className="pizzas">
//         <img src={props.pizza.photoName} alt={props.pizza.name} />
//         <div>
//           <h3>{props.pizza.name}</h3>
//           <p>{props.pizza.ingredients}</p>
//           <span>{props.pizza.price}</span>
//         </div>
//       </li>
//     </>
//   );
// }

function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closingHour = 22;

  const isOpen = hour >= openHour && hour <= closingHour;

  if (isOpen) alert("We're currently open!");
  else alert("sorry we're closed now!.");

  return (
    <>
      <footer className="footer">
        {new Date().toString()} We're currently open!.
      </footer>
    </>
  );
}

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

export default App;
