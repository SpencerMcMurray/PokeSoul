import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/App.css";

import IndexPage from "./components/IndexPage";
import EditorPage from "./components/EditorPage";
import Navigation from "./components/Navigation";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <Route path="/" exact component={IndexPage} />
        <Route path="/editor/:pairs" component={EditorPage} />
      </Router>
    );
  }
}
