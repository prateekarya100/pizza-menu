import React from "react";

const Footer = () => {
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
};

export default Footer;
