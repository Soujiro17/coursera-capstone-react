import React from "react";
import "./index.css";

const Food = ({ title, description, img, price }) => {
  return (
    <article className="food">
      <img className="food-img" src={img} alt="food" />
      <main className="food-content">
        <header className="food-header">
          <h4>{title}</h4>
          <p>${price}</p>
        </header>
        <p className="food-description">{description}</p>
        <footer className="food-footer">
          <p>Order a delivery</p>
          <img className="delivery" src="/imgs/bicycle.svg" alt="delivery" />
        </footer>
      </main>
    </article>
  );
};

export default Food;
