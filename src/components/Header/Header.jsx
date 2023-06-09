import React from "react";
import logo from "../../assets/reactlogo.png";
import "./Header.css";

export default function Header() {
  return (
    <nav className="navbar">
      <img className="reactlogo" src={logo} />
      <h1>ReactFacts</h1>
      <p>React Course-Project 1</p>
    </nav>
  );
}
