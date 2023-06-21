import React from "react";
import CartWidget from "../CartWidget";
import "./Styles.css";

const NavBar = () => {
  return (
    <header className="header">
      <a href="/" className="logo">
        <span className="actual-text">&nbsp;iSolutions&nbsp;</span>
        <span className="hover-text" aria-hidden="true">&nbsp;iSolutions&nbsp;</span>
      </a>
      <input type="checkbox" className="side-menu" id="side-menu" />
      <label htmlFor="side-menu" className="hamb">
        <span className="hamb-line"></span>
      </label>
      <nav className="nav">
        <ul className="menu">
          <li><a href="#">iPhone</a></li>
          <li><a href="#">iPad</a></li>
          <li><a href="#">Mac</a></li>
          <li><a href="#">Watch</a></li>
          <li><a href="#">TV</a></li>
          <li><a href="#">Home Kit</a></li>
          <li><a href="#">Services</a></li>
          <a href="#"><CartWidget /></a>
        </ul>
      </nav>
    </header>

  );
};

export default NavBar;
