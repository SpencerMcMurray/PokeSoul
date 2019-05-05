import React, { Component } from "react";
import Pokemon from "./Pokemon";
import { CardGroup } from "react-bootstrap";

export default class PokePair extends Component {
  state = {
    isFainted: {
      fainted: this.props.pair.killed,
      text: this.props.pair.killed ? "Fainted" : "Faint?",
      class: this.props.pair.killed ? "killed-text" : "kill-text"
    }
  };

  handleKill() {
    const killed = !this.state.isFainted.fainted;
    this.setState({
      isFainted: {
        fainted: killed,
        text: killed ? "Fainted" : "Faint?",
        class: killed ? "killed-text" : "kill-text"
      }
    });
  }

  render() {
    return (
      <div
        className="col-md-4 mt-2 pair"
        style={{ minWidth: "24vh" }}
        onClick={() => {
          this.props.handleKill(this.props.pair);
          this.handleKill();
        }}
      >
        <CardGroup className="flex-row flex-nowrap">
          <div
            className={
              "d-flex justify-content-center align-items-center title-font " +
              this.state.isFainted.class
            }
            style={{
              backgroundColor: "darkred",
              color: "white"
            }}
          >
            <h1>{this.state.isFainted.text}</h1>
          </div>
          <h5 className="title-font">{this.props.pair.found}</h5>
          <Pokemon poke={this.props.pair.a} />
          <Pokemon poke={this.props.pair.b} />
        </CardGroup>
      </div>
    );
  }
}
