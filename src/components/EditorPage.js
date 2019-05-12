import React, { Component } from "react";
import PokeDisplay from "./editor/PokeDisplay";
import Header from "./editor/Header";
import Footer from "./Footer";

const validPairs = pairs => {
  if (
    pairs.hasOwnProperty("a") &&
    pairs.hasOwnProperty("b") &&
    pairs.hasOwnProperty("killed") &&
    pairs.hasOwnProperty("found")
  ) {
    return true;
  }
  return false;
};

const getPairsFromUrl = urlPairs => {
  try {
    let pairs = JSON.parse(decodeURIComponent(urlPairs));
    // We want to start a new soul link or invalid input
    if (pairs.new || !validPairs(pairs[0])) {
      return [];
    }
    // Otherwise load the url
    return pairs;
    // In the case we get any error, return the empty list
  } catch (e) {
    return [];
  }
};

export default class EditorPage extends Component {
  // Store in local storage as soon as we get the url
  state = {
    toLoad: JSON.parse(decodeURIComponent(this.props.match.params.pairs)).load
      ? true
      : false,
    pairs: getPairsFromUrl(this.props.match.params.pairs)
  };

  render() {
    return (
      <div className="container text-center">
        <Header />
        <PokeDisplay
          load={
            JSON.parse(decodeURIComponent(this.props.match.params.pairs)).load
              ? true
              : false
          }
          pairs={getPairsFromUrl(this.props.match.params.pairs)}
        />
        <Footer />
      </div>
    );
  }
}
