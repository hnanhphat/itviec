import React from 'react';
// import { Navbar, Nav } from "react-bootstrap";
// import { Link } from "react-router-dom";
import logo from "../logo.png";

const Navbarr = () => {
  return (
    <header id="header" className="header">
      <div className="container">
        <div className="header__left">
          <a href="/" className="logo"><img src={logo} alt="IT Viec" /></a>
          <ul>
            <li>
              <a href="/jobs">All Jobs</a>
            </li>
            <li>
              <a href="/company">IT Companies</a>
            </li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>
        <div className="header__right">
          <ul>
            <li><a href="/login">Sign In</a></li>
            <li><a href="/employer">Employers</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbarr
