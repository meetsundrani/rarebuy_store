import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import User from "./User";
import Visit from "./Visit";
import Not_Found from "./notfound";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";

let routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/user" component={User} />
      <Route path="/visit" component={Visit} />
      <Route component={Not_Found} />
    </Switch>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
