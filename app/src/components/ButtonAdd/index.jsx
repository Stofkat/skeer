import React from 'react';
import classNames from "classnames";

import "./style.scss"

export default function ButtonAdd({ onClick }) {
  const classes = classNames(
    "button-add",
  );

  return (
    <div
      className={classes}
      onClick={onClick}
    >
      <img
        alt="Add button"
        src={require("assets/icons/plus.svg").default}
        className="icon-add"
      />
    </div>
  )
}