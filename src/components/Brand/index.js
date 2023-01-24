import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Brand = () => {
  return (
    <section className="main-brand">
      <div className="content">
        <div className="title-container">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <h3>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes server with a modern twist.
          </h3>
          <button className="reserve-btn">
            <Link to="/booking">Reserve a Table</Link>
          </button>
        </div>
        <img className="rest-food" src="/imgs/restauranfood.jpg" alt="food" />
      </div>
    </section>
  );
};

export default Brand;
