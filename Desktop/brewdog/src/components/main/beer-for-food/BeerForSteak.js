import React from "react";
import "./BeerForSteak.css";

export default function BeerForSteak({ filteredSteakPost }) {
  return (
      <div className="punk-card-wrapper" key={filteredSteakPost.id}>
        <h3 className="punk-card-name">{filteredSteakPost.name}</h3>
        <img
          src={filteredSteakPost.image_url}
          className="punk-card-img"
          alt="bear_img"
          width="110"
          height="350"
        />
        <p className="punk-card-abv">{filteredSteakPost.abv}</p>
      </div>
  );
}
