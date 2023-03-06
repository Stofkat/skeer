import { IconButton } from "@material-ui/core";
import classNames from "classnames";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";


import "./style.scss";


const Tab = ({ label, highlighted, icon, path }) => {

  const { pathname } = useLocation();
  const history = useHistory();

  const selected = pathname.startsWith(path);
  const tabClasses = classNames(
    "tab",
    highlighted && "highlighted",
    selected && "selected"
  )
  return (
    <IconButton
      color="primary"
      component="label"
    >
      <div
        onClick={() => history.push(path)}
        className={tabClasses}
      >
        <img
          className="tab-icon"
          src={require(`assets/icons/${icon}${selected ? "-selected" : ""}.svg`)}
        />
        <span className="label">
          {label}
        </span>
      </div>
    </IconButton>

  );
}

export default Tab;