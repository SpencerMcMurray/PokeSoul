import React, { Component } from "react";
import { CardGroup } from "react-bootstrap";
import Pokemon from "./Pokemon";

export default class Party extends Component {
  render() {
    return (
      <div className="col-lg-6 mt-4">
        <h4 className="title-font text-center">
          Party Option #{this.props.idx}
        </h4>
        {this.props.members.map((pair, idx) => {
          return (
            <CardGroup
              key={idx}
              className="text-center flex-row flex-nowrap justify-content-center"
            >
              <Pokemon poke={pair.a} />
              <Pokemon poke={pair.b} />
            </CardGroup>
          );
        })}
      </div>
    );
  }
}
