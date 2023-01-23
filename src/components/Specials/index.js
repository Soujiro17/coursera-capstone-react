import React from "react";
import Food from "../Food";
import "./index.css";

const Specials = () => {
  return (
    <section className="specials">
      <div className="specials-wrapper">
        <header className="specials-header">
          <h2>This weeks specials!</h2>
          <button className="online-menu-btn">Online Menu</button>
        </header>
        <main className="specials-foods">
          <Food
            title="Greek salad"
            price={12.99}
            img="/imgs/greek salad.jpg"
            description={
              "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
            }
          />
          <Food
            title="Bruchetta"
            price={5.99}
            img="/imgs/bruchetta.svg"
            description={
              "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
            }
          />
          <Food
            title="Lemon Dessert"
            price="5.00"
            img="/imgs/lemon dessert.jpg"
            description={
              "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
            }
          />
        </main>
      </div>
    </section>
  );
};

export default Specials;
