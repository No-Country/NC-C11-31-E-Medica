import Link from "next/link";
import React from "react";
import "./Navbar.css";
export default function Navbar() {
  return (
    <header className="navbar-container">
      <input type="text" className="navbar-input" />
      <ul className="navbar-ul-container">
        <li className="navbar-li-container">
          <div className="navbar-img" />
          <label>Label</label>
        </li>
        <li className="navbar-li-container">
          <div className="navbar-img" />
          <label>Label</label>
        </li>
        <li className="navbar-li-container">
          <div className="navbar-img" />
          <label>Label</label>
        </li>
        <li className="navbar-li-container">
          <div className="navbar-img" />
          <label>Label</label>
        </li>
      </ul>
    </header>
  );
}
