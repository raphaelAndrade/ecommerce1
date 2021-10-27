import React, { useState } from 'react';
import { FaHome, FaUser, FaShoppingCart, FaChessQueen } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  const [displayStyle, setDisplay] = useState({ "display": "none" });

  // Toggle category link
  const toggleLink = () => {
    if (displayStyle.display === "none") {
      setDisplay({ "display": "block" });
    } else {
      setDisplay({ "display": "none" });
    }
  };

  return (
    <>
      <header>
        <h1 className="siteTitle"><a href="/">
          <img src="./img/logo.jpg" alt="logo" className="logo" />Lifestyle Connect</a></h1>

        {/* Category cascade style links */}
        <div className="categoryPanel" style={displayStyle}>
          {/* Category Selection Dropdown */}
          <Link
            to={{
              pathname: "/category",
              state: {
                parameter: "women's clothing"
              }
            }}
            className="categoryLink "
            onClick={toggleLink}>Women Clothing</Link>
          <Link
            to={{
              pathname: "/category",
              state: {
                parameter: "men's clothing"
              }
            }}
            className="categoryLink"
            onClick={toggleLink}>Men Clothing</Link>
          <Link
            to={{
              pathname: "/category",
              state: {
                parameter: "jewelery"
              }
            }}
            className="categoryLink"
            onClick={toggleLink}>Jewelery</Link>
          <Link
            to={{
              pathname: "/category",
              state: {
                parameter: "electronics"
              }
            }}
            className="categoryLink"
            onClick={toggleLink}>Electronics</Link>
        </div>

        {/* Navbar */}
        <nav className="navBar">
          <ul>
            <li>
              <Link to="/"><FaHome></FaHome> Home</Link>
            </li>
            <li onClick={toggleLink}>
              <FaChessQueen></FaChessQueen> Category
            </li>
            <li>
              <Link to="/login"><FaUser></FaUser> Log In</Link>
            </li>
            <li>
              <Link to="/checkout"><FaShoppingCart></FaShoppingCart> Check Out</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
