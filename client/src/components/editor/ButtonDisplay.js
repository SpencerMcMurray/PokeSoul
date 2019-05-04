import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class ButtonDisplay extends Component {
  render() {
    return (
      <div className="d-flex justify-content-around py-2">
        <Button variant="success" size="lg" onClick={this.props.handleAdd}>
          Add Pair
        </Button>
        <Button size="lg" onClick={this.props.handleGenerate}>
          Generate Parties
        </Button>
        <Button variant="info" size="lg" onClick={this.props.handleShare}>
          Share
        </Button>
      </div>
    );
  }
}
