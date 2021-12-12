import React from "react";
import useBeersAxios from "./useBeersAxios";
import { useParams } from "react-router-dom";

export default function BeerPage() {
  const { name } = useParams();
  const { data: post } = useBeersAxios(
    'https://api.punkapi.com/v2/beers/' + name );
    console.log(name);
    console.log(post);
  return (
    <div>
      {post && (
          <h1>{post.name}</h1>
      )}
    </div>
  );
}
