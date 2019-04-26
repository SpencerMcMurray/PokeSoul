import React, { Component } from "react";

export default class EditorPage extends Component {
  state = {
    pairs: JSON.parse(decodeURIComponent(this.props.match.params.pairs))
  };

  render() {
    return (
      <div className="container text-center">
        {this.state.pairs.map((item, idx) => {
          return (
            <p key={idx}>
              {item.a} : {item.b}
            </p>
          );
        })}
      </div>
    );
  }
}
