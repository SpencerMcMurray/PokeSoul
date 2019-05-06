import React, { Component } from "react";
import PokeDisplay from "./editor/PokeDisplay";
import Header from "./editor/Header";

export default class EditorPage extends Component {
  // Store in local storage as soon as we get the url
  state = {
    pairs: JSON.parse(decodeURIComponent(this.props.match.params.pairs))
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
