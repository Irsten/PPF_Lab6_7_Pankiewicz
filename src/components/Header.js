/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../logo.png";
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <Link to="Home">
          <img src={logo} className="logo" alt="logo" />
      </Link>
      <h2>Pieski</h2>
    </div>
  );
}