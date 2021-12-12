import React, { useState } from "react";
import BeersList from './main/BeersList'
import useBeersAxios from "./useBeersAxios";
import HeaderMenu from "./header/HeaderMenu";

export default function BeersPage() {
  const [toggleState, setToggleState] = useState(1);
  const {
    loading,
    data:posts
  } = useBeersAxios('https://api.punkapi.com/v2/beers');

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <HeaderMenu
        toggleTab={toggleTab}
        toggleState={toggleState}
        setToogleState={setToggleState}
      />
     {posts && <BeersList toggleState={toggleState} posts={posts} loading={loading}/>}
    </div>
  );
}
