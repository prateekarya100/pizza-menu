import React from "react";
import Order from "./Order";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 8;
  const closingHour = 22;

  const isOpen = hour >= openHour && hour <= closingHour;

  // if (isOpen) alert("We're currently open!");
  // else alert("sorry we're closed now!.");

  return (
    <>
      <footer className="footer">
        {isOpen ? (
          <Order closingHour={closingHour} openHour={openHour} />
        ) : (
          <p>Sorry we're closed now!, Please come back later.</p>
        )}
      </footer>
    </>
  );
};

export default Footer;
