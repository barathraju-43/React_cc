import React from "react";
import "./MainContent.css";

export default function MainContent() {
  return (
    <div className="main-section">
      <h1 className="heading">Fun facts about React</h1>
      <ul className="points">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}
