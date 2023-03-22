import React from "react";
import { useLocation } from "react-router-dom";

import "./style.scss";

const titles = {
  "/deals": "Aanbiedingen (3/3)",
  "/products": "Producten (2/3)",
  "/stores": "Winkels (1/3)"
};

const Header = () => {

  const { pathname } = useLocation();

  const title = titles[pathname];

  return (
    <div className="header">
      <span className="logo">Skeer</span>
      {title && <span className="title">{title}</span>}
    </div>
  );
}

export default Header;