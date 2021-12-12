import React from "react";
import { Link } from "react-router-dom";
import "./BeerForAll.css";

export default function BeerForAll({ post }) {
  return (
    <Link to={`/beers/${post.name}`}>
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
    </Link>
  );
}
