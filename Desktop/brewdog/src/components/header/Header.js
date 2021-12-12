import React from "react";
import ImgLoop from "../../assets/icons/loup.svg";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div class="all-header">
      <header class="container-fluid">
        <Link to="/">
          <div class="col-auto header-wrapper-logo" style={{ maxWidth: "400px" }}>
            <logo class="header-logo-icon">Brewdog</logo>
          </div>
        </Link>

        <div
          class="col-auto header-wrapper-input"
          style={{ maxWidth: "400px" }}
        >
          <label class="header-wrapper-label">
            <input
              type="text"
              placeholder="Search..."
              class="header-inpt"
              required
            />

            <button type="button" class="header-btn">
              <img src={ImgLoop} width="15" height="15" alt="btn-icon" />
            </button>
          </label>
        </div>
      </header>
    </div>
  );
}
