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
    </menu>
  );
}
