import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Search from "./pages/Search/Search";
import Saved from "./pages/Saved/Saved";
import NoMatch from "./pages/NoMatch/NoMatch";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div id="main-content">
          <Header />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route path="*" component={NoMatch} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
