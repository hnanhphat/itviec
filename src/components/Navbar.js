import React from 'react';
import { Link } from "react-router-dom";
import logo from "../logo.png";

const Navbarr = ({isAuth}) => {
  return (
    <header id="header" className="header">
      <div className="container">
        <div className="header__left">
          <Link to="/" className="logo"><img src={logo} alt="IT Viec" /></Link>
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
            {isAuth ? <li className="dropdown">
              <Link to="/">hnanhphat</Link>
              <div className="box"><a href="/">Log Out</a></div>
            </li> :
            <li><Link to="/login">Sign In</Link></li> }
            <li><a href="/employer">Employers</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbarr
