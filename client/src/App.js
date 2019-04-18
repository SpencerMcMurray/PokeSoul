import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import IndexPage from "./components/IndexPage";
import Navigation from "./components/Navigation";
import "./styles/App.css";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <Route path="/" exact component={IndexPage} />
      </Router>
    );
  }
}
