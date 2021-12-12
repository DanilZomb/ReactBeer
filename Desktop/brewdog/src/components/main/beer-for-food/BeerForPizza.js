import React from "react";
import "./BeerForPizza.css";

export default function BeerForPizza({ filteredPizzaPost }) {
  return (
    <div className="punk-card-wrapper" key={filteredPizzaPost.id}>
      <h3 className="punk-card-name">{filteredPizzaPost.name}</h3>
      <img
        src={filteredPizzaPost.image_url}
        className="punk-card-img"
        alt="bear_img"
        width="110"
        height="350"
      />
      <p className="punk-card-abv">{filteredPizzaPost.abv}</p>
    </div>
  );
}
