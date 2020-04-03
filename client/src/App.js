import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Search from "./pages/Search/Search";
import Saved from "./pages/Saved/Saved";
import NoMatch from "./pages/NoMatch/NoMatch";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
