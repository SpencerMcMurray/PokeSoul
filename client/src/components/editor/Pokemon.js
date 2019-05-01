import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class Pokemon extends Component {
  render() {
    return (
      <Card style={{ width: "11rem" }}>
        <Card.Header className="title-font">
          {this.props.poke.name.charAt(0).toUpperCase() +
            this.props.poke.name.slice(1)}
        </Card.Header>
        <Card.Img
          className="m-auto"
          style={{ width: "12vh" }}
          src={this.props.poke.sprites.front_default}
        />
      </Card>
    );
  }
}
