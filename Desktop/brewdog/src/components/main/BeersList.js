import React from "react";
import { Link } from "react-router-dom";
import BeersItem from "./BeersItem";
import "./BeersList.css";

export default function Beers({ posts, loading, toggleState }) {
  return (
    <>
      {loading && <h1 className="beers-loading">Loading......</h1>}

      {!loading &&
        (toggleState === 1 ? (
          <div
            className={toggleState === 1 ? "punk-beers-active" : "punk-beers"}
          >
            <div className="punk-wrapper active">
              {posts.map((post) => (
                <Link className="link" to={`/beers/${post.id}`}>
                  <BeersItem post={post} toggleState={toggleState} />
                </Link>
              ))}
            </div>
          </div>
        ) : toggleState === 2 ? (
          <div
            className={toggleState === 2 ? "punk-beers-active" : "punk-beers"}
          >
            <div className="punk-wrapper active">
              {posts
                .filter((post) => post.abv <= 6)
                .map((filteredPizzaPost) => (
                  <Link className="link" to={`/beers/${filteredPizzaPost.id}`}>
                    <BeersItem
                      filteredPizzaPost={filteredPizzaPost}
                      toggleState={toggleState}
                    />
                  </Link>
                ))}
            </div>
          </div>
        ) : toggleState === 3 ? (
          <div
            className={toggleState === 3 ? "punk-beers-active" : "punk-beers"}
          >
            <div className="punk-wrapper active">
              {posts
                .filter((post) => post.abv >= 6)
                .map((filteredSteakPost) => (
                  <Link className="link" to={`/beers/${filteredSteakPost.id}`}>
                    <BeersItem
                      filteredSteakPost={filteredSteakPost}
                      toggleState={toggleState}
                    />
                  </Link>
                ))}
            </div>
          </div>
        ) :  toggleState === 4 ? (
          <div className="punk-wrapper active">
          {posts.sort((a,b) => (a.abv < b.abv  ? -1 : 1)).map((post) => (
            <Link className="link" to={`/beers/${post.id}`}>
              <BeersItem post={post} toggleState={toggleState} />
            </Link>
          ))}
        </div>
  
         ):toggleState === 5 ? (
          <div className="punk-wrapper active">
          {posts.sort((a,b) => (a.abv < b.abv  ? 1 : -1)).map((post) => (
            <Link className="link" to={`/beers/${post.id}`}>
              <BeersItem post={post} toggleState={toggleState} />
            </Link>
          ))}
        </div>
  
         ):toggleState === 6 ? ( 
          <div className="punk-wrapper active">
              {posts.sort((a,b) => (a.name < b.name ? -1 : 1 )).map((post) => (
                <Link className="link" to={`/beers/${post.id}`}>
                  <BeersItem post={post} toggleState={toggleState} />
                </Link>
              ))}
            </div>
        ) : toggleState === 7 ? (
          <div className="punk-wrapper active">
          {posts.sort((a,b) => (a.name < b.name  ? 1 : -1)).map((post) => (
            <Link className="link" to={`/beers/${post.id}`}>
              <BeersItem post={post} toggleState={toggleState} />
            </Link>
          ))}
        </div>
  
         ):null)}
    </>
  );
}
