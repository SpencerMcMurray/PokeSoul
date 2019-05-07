import React, { Component } from "react";
import PokeDisplay from "./editor/PokeDisplay";
import Header from "./editor/Header";

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

const getPairsFromUrlOrCookies = urlPairs => {
  try {
    let pairs = JSON.parse(decodeURIComponent(urlPairs));
    if (!validPairs(pairs[0])) {
      return [];
    }
    return pairs;
  } catch (e) {
    return [];
  }
};

export default class EditorPage extends Component {
  // Store in local storage as soon as we get the url
  state = {
    pairs: getPairsFromUrlOrCookies(this.props.match.params.pairs)
  };

  render() {
    return (
      <div className="container text-center">
        <Header />
        <PokeDisplay pairs={this.state.pairs} />
      </div>
    );
  }
}
