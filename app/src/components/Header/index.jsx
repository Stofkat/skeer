import React from "react";

import "./style.scss";

const Header = ({ title }) => {

  return (
    <div className="header">
      <span className="title">{title}</span>
    </div>
  );
}

export default Header;