import React from "react";
import Header from "./components/header/Header";
import BeersPage from "./components/BeersPage";
import BeerPage from "./components/BeerPage";
import { Route, Routes } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route exact path="/" element={<BeersPage/>}/>
      <Route path="/beers/:name" element={<BeerPage/>}/>
    </Routes>
   </> 
  );
}
