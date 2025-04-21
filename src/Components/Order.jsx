import React from "react";

const Order = ({ closingHour, openHour }) => {
  return (
    <>
      <div className="order">
        <p>
          We're open from {openHour}:00 AM to {closingHour}:00 PM. Come visit us
          or order online.
        </p>
        <button className="btn">Order</button>
      </div>
    </>
  );
};

export default Order;
