import React, { Component } from "react";
import Pokemon from "./Pokemon";
import { CardGroup } from "react-bootstrap";

export default class PokePair extends Component {
  render() {
    return (
      <div
        className="col-md-4 mt-2"
        style={{ minWidth: "24vh" }}
        onClick={() => this.props.handleKill(this.props.pair)}
      >
        <CardGroup className="flex-row flex-nowrap">
          <Pokemon poke={this.props.pair.a} />
          <Pokemon poke={this.props.pair.b} />
        </CardGroup>
      </div>
    );
  }
}
