import React from "react";
import ImgLoop from "../../assets/icons/loup.svg";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="all-header">
      <header className="container-fluid">
        <Link className="link" to="/">
          <div className="col-auto header-wrapper-logo" style={{ maxWidth: "400px" }}>
            <div className="header-logo-icon">Brewdog</div>
          </div>
        </Link>

        <div
          className="col-auto header-wrapper-input"
          style={{ maxWidth: "400px" }}
        >
          <label className="header-wrapper-label">
            <input
              type="text"
              placeholder="Search..."
              className="header-inpt"
              required
            />

            <button type="button" className="header-btn">
              <img src={ImgLoop} width="15" height="15" alt="btn-icon" />
            </button>
          </label>
        </div>
      </header>
    </div>
  );
}
