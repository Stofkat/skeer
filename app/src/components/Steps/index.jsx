import React from "react";
import { useLocation } from "react-router-dom";

import Step from "components/Step";

import "./style.scss";

const display = [
  "/deals",
  "/products",
  "/stores"
];

const Steps = () => {

  const { pathname } = useLocation();

  console.log("pathname",pathname);

  if (display.includes(pathname)) {
    return (
      <div className="container-steps">
        <div className="container-steps-inner">
          <Step
            label="Winkels"
            path="/stores"
            icon="stores"
          />
          <Step
            label="Producten"
            path="/products"
            icon="products"
          />
          <Step
            label="Aanbiedingen"
            path="/deals"
            icon="deals"
          />
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Steps;