import React from "react";
import BeerForAll from "./beer-for-food/BeerForAll";
import BeerForPizza from "./beer-for-food/BeerForPizza";
import BeerForSteak from "./beer-for-food/BeerForSteak";
import "./BeersList.css";

export default function Beers({ posts, loading, toggleState }) {
  return (
    <>
      {loading && <h1>Loading......</h1>}
      {!loading && (
        <div className={toggleState === 1 ? "punk-beers-active" : "punk-beers"}>
          <div className="punk-wrapper active">
            {posts.map((post) => (
              <BeerForAll post={post} />
            ))}
          </div>
        </div>
      )}

      <div className={toggleState === 2 ? "punk-beers-active" : "punk-beers"}>
        <div className="punk-wrapper active">
          {posts
            .filter((post) => post.abv <= 6)
            .map((filteredPizzaPost) => (
              <BeerForPizza filteredPizzaPost={filteredPizzaPost} />
            ))}
        </div>
      </div>

      <div className={toggleState === 3 ? "punk-beers-active" : "punk-beers"}>
        <div className="punk-wrapper active">
          {posts
            .filter((post) => post.abv >= 6)
            .map((filteredSteakPost) => (
              <BeerForSteak filteredSteakPost={filteredSteakPost} />
            ))}
        </div>
      </div>
    </>
  );
}
