import React from "react";
import logo from "../../assets/reactlogo.png";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <img src={logo} width="40px" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
