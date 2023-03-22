import { IconButton } from "@material-ui/core";
import classNames from "classnames";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";


import "./style.scss";


const Step = ({ label, highlighted, icon, path }) => {

  const { pathname } = useLocation();
  const history = useHistory();

  const selected = pathname.startsWith(path);
  const stepClasses = classNames(
    "step",
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
        className={stepClasses}
      >
        <img
          className="tab-icon"
          alt="step"
          src={require(`assets/icons/${icon}${selected ? "-selected" : ""}.svg`)}
        />
      </div>
    </IconButton>

  );
}

export default Step;