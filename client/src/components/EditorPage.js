import React, { Component } from "react";

export default class EditorPage extends Component {
  state = { data: this.props.location.query };

  render() {
    return <h1>{this.state.data.x}</h1>;
  }
}
