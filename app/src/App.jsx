import React from "react";
import { Link, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import PageStores from "pages/PageStores";
import PageDeals from "pages/PageDeals";
import PageProducts from "pages/PageProducts";

import Tab from "components/Step";

import "./App.scss";
import PagePrivacy from "pages/PagePrivacy";
import Header from "components/Header";
import Steps from "components/Steps";

const AppRoutes = () => {

  return (
    <>
      <div className="App">
        <Router>
          <Header title="Winkels" />
          <div className="container-content">
            <Steps />
            <Route exact path="/" component={PageStores} />
            <Route exact path="/stores" component={PageStores} />
            <Route exact path="/products" component={PageProducts} />
            <Route exact path="/deals" component={PageDeals} />
            <Route exact path="/privacy" component={PagePrivacy} />
          </div>
          {/* <span className="logo">Skeer</span> */}

        </Router>
      </div>
    </>
  );
}

export default AppRoutes;