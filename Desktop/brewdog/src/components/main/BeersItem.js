import React from "react";
import "./BeersItem.css";

export default function BeersItem({ post, filteredPizzaPost, filteredSteakPost, toggleState }) {
  return (
    <div>
      {toggleState === 1 || toggleState === 4 || toggleState === 5 || toggleState === 6 || toggleState === 7 ? (
        <div className="punk-card-wrapper" key={post.id}>
          <h3 className="punk-card-name">{post.name}</h3>
          <img
            src={post.image_url}
            className="punk-card-img"
            alt="bear_img"
            width="110"
            height="350"
          />
          <p className="punk-card-abv">{post.abv}</p>
        </div>
      ) : null}

      {toggleState === 2 ? (
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
      ) : null}

      {toggleState === 3 ? (
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
      ) : null}



    </div>
  );
}
