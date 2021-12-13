import React from "react";
import "./HeaderMenu.css";

export default function HeaderMenu({toggleState,toggleTab}) {
  return (
    <menu>
      <div className="header-menu-wrapper">
        <button className={toggleState === 1 ? "tablinks tablinks-active" : "tablinks"} onClick={()=>toggleTab(1)}>All beers</button>
        <button className={toggleState === 2 ? "tablinks tablinks-active" : "tablinks"} onClick={()=>toggleTab(2)}>Beers for pizza</button>
        <button className={toggleState === 3 ? "tablinks tablinks-active" : "tablinks"} onClick={()=>toggleTab(3)}>Beers for steak</button>
      </div>

      <div className="header-menu-sec-wrapper">
        <button className={toggleState === 4 ? "tablinks tablinks-active" : "tablinks"} onClick={()=>toggleTab(4)}>Abv ascending</button>
        <button className={toggleState === 5 ? "tablinks tablinks-active" : "tablinks"} onClick={()=>toggleTab(5)} >Abv descending</button>
        <button className={toggleState === 6 ? "tablinks tablinks-active" : "tablinks"} onClick={()=>toggleTab(6)} >Name ascending</button>
        <button className={toggleState === 7 ? "tablinks tablinks-active" : "tablinks"} onClick={()=>toggleTab(7)} >Name descending</button>
      </div>
    </menu>
  );
}
