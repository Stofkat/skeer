import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./style.scss";

const titles = {
  "/deals": "Aanbiedingen (3/3)",
  "/products": "Producten (2/3)",
  "/stores": "Winkels (1/3)",
  "/privacy": "Privacy"
};

const Header = () => {

  const { pathname } = useLocation();

  const title = titles[pathname];

  return (
    <div className="header">
      <span className="logo">Skeer</span>
      {title && <span className="title">{title}</span>}
      <div className="links">
        <Link className="menu-link" to="/stores">Aanbiedingen</Link>
        <Link className="menu-link" to="/about">Over ons</Link>
        <Link className="menu-link" to="/privacy">Privacy</Link>
        <Link className="menu-link" to="/contact">Contact</Link>
      </div>
      <div className="mobile-stub"/>
    </div>
  );
}

export default Header;