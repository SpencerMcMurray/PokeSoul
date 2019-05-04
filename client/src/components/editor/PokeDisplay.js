import React, { Component } from "react";
import PokePair from "./PokePair";
import ButtonDisplay from "./ButtonDisplay";
import ModalManager from "./ModalManager";

const url = "https://pokeapi.co/api/v2/pokemon/";

export default class PokeDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pairs: [],
      hide: " d-none",
      addModalShow: false,
      generateShow: false,
      shareShow: false
    };
    this.flipKilled = this.flipKilled.bind(this);
  }

  // Fetches all pokemon data on the ids given and updates the state
  fetchFromApi(aId, bId, killed) {
    let newPair = { killed: killed };
    fetch(url + aId)
      .then(res => res.json())
      .then(res => (newPair.a = res))
      .then(res =>
        fetch(url + bId)
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
      <React.Fragment>
        <h1 className="title-font pb-2">Pairs</h1>
        <ButtonDisplay
          handleAdd={() => this.setState({ addModalShow: true })}
          handleGenerate={() => this.setState({ generateShow: true })}
          handleShare={() => this.setState({ shareShow: true })}
        />
        <ModalManager
          add={{
            show: this.state.addModalShow,
            onHide: () => this.setState({ addModalShow: false })
          }}
          generate={{
            show: this.state.generateShow,
            onHide: () => this.setState({ generateShow: false })
          }}
          share={{
            show: this.state.shareShow,
            onHide: () => this.setState({ shareShow: false })
          }}
        />
        <div className={"border rounded border-secondary" + this.state.hide}>
          <div className="d-flex flex-wrap justify-content-around mb-2">
            {this.state.pairs.map((item, idx) => {
              return (
                <PokePair handleKill={this.flipKilled} key={idx} pair={item} />
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
