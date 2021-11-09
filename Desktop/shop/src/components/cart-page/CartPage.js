import React from "react";
import "./CartPage.css";
import CartAbout from "./about/CartAbout";

export default function CartPage({ cartItems, onAdd, onDelete }) {
  return (
    <div>
      <div class="about-wrapper-cart">In Cart<div class="cart-quantity">{cartItems.length}</div></div>
      
      <div class="products-wrapper">
        <CartAbout cartItems={cartItems} onDelete={onDelete} onAdd={onAdd} />
      </div>
    </div>
  );
}
