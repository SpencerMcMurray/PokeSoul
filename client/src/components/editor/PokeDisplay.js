import React, { Component } from "react";
import PokePair from "./PokePair";

export default class PokeDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pairs: [],
      hide: " d-none"
    };
    this.flipKilled = this.flipKilled.bind(this);
  }

  // Fetches all pokemon data on the ids given and updates the state
  fetchFromApi(aId, bId, killed) {
    let newPair = { killed: killed };
    fetch("https://pokeapi.co/api/v2/pokemon/" + aId)
      .then(res => res.json())
      .then(res => (newPair.a = res))
      .then(res =>
        fetch("https://pokeapi.co/api/v2/pokemon/" + bId)
          .then(res => res.json())
          .then(res => (newPair.b = res))
      )
      .then(() => this.setState({ pairs: [...this.state.pairs, newPair] }));
  }

  componentDidMount() {
    // Hide the list of pairs until theyre all loaded
    this.setState({ hide: " d-none" });
    this.props.pairs.map(pair =>
      this.fetchFromApi(pair.a, pair.b, pair.killed)
    );
    this.setState({ hide: "" });
  }

  flipKilled(pair) {
    // Find the pair in the list and flip its killed value
    let idx = this.state.pairs.indexOf(pair);
    let newPairs = this.state.pairs;
    newPairs[idx].killed = !newPairs[idx].killed;
    this.setState({ pairs: newPairs });
  }

  render() {
    return (
      <div className={"border rounded border-secondary" + this.state.hide}>
        <div className="d-flex flex-wrap justify-content-around mb-2">
          {this.state.pairs.map((item, idx) => {
            return (
              <PokePair handleKill={this.flipKilled} key={idx} pair={item} />
            );
          })}
        </div>
      </div>
    );
  }
}
