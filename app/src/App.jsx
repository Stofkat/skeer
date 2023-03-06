import React from "react";
import { Link, Route } from "react-router-dom";
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
          <footer className="footer">
            <div className="footer-links">
              <Link to="privacy">Privacy</Link>
              <Link to="privacy">Over ons</Link>
              <Link to="privacy">Contact</Link>
            </div>
            <span className="developed-by">Skeer is een product door Noka Development.</span>
          </footer>
          <div className="container-content">
            <Route exact path="/" component={PageStores} />
            <Route exact path="/stores" component={PageStores} />
            <Route exact path="/products" component={PageProducts} />
            <Route exact path="/deals" component={PageDeals} />
          </div>
          <div className="container-tabs">
            <span className="logo">Skeer</span>
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