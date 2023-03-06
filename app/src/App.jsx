import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import PageStores from "pages/PageStores";
import PageDeals from "pages/PageDeals";
import PageProducts from "pages/PageProducts";

import Tab from "components/Tab";

import "./App.scss";

const AppRoutes = () => {

  return (
    <>
    <div className="App">
      <Router>
        <div className="container-content">
          <Route exact path="/" component={PageStores} />
          <Route exact path="/stores" component={PageStores} />
          <Route exact path="/products" component={PageProducts} />
          <Route exact path="/deals" component={PageDeals} />
        </div>
        <div className="container-tabs">
          <div className="container-tabs-inner">
          <Tab
            label="Winkels"
            path="/stores"
            icon="stores"
          />
          <Tab
            label="Producten"
            path="/products"
            icon="products"
          />
          <Tab
            label="Aanbiedingen"
            path="/deals"
            icon="deals"
          />
          </div>
        </div>
      </Router>
    </div>
    </>
  );
}

export default AppRoutes;