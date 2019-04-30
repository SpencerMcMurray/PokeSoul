import React, { Component } from "react";

export default class PokeDisplay extends Component {
  state = {
    pairs: []
  };

  fetchFromApi(aId, bId) {
    let newPair = {};
    fetch("https://pokeapi.co/api/v2/pokemon/" + aId)
      .then(res => res.json())
      .then(res => (newPair.a = res))
      .then(res =>
        fetch("https://pokeapi.co/api/v2/pokemon/" + bId)
          .then(res => res.json())
          .then(res => (newPair.b = res))
      )
      .then(() => this.setState({ pairs: [...this.state.pairs, newPair] }))
      .then(() => console.log(newPair));
  }

  componentDidMount() {
    this.props.pairs.map(pair => this.fetchFromApi(pair.a, pair.b));
  }

  render() {
    return (
      <div className="border border-primary">
        <div className="my-4 d-flex flex-wrap">
          {this.state.pairs.map((item, idx) => {
            return (
              <div key={idx} className="col-md-4">
                {item.a.name} : {item.b.name}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
