import React from "react";
import "./Header.css";
import cart from "../../assets/icons/cart.svg";
import wishlist from "../../assets/icons/wishlist.svg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <NavLink to="/"> Shopify </NavLink>
      </div>
      <div className="menu">
        <ul>
          <li>
            <NavLink to="/men">Men</NavLink>
          </li>
          <li>
            <NavLink to="/women">Women</NavLink>
          </li>
          <li>
            <NavLink to="/kids">Kids</NavLink>
          </li>
          <li>
            <NavLink to="/home&living">Home & Living</NavLink>
          </li>
          <li>
            <NavLink to="/beauty">Beauty</NavLink>
          </li>
        </ul>
      </div>
      <div className="headerIcons">
        <input type="search" placeholder="Search" />
        <NavLink to="/wishlist">
          <img src={wishlist} />
        </NavLink>
        <NavLink to="/cart">
          <img src={cart} />
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
