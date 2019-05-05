import React, { Component } from "react";
import PokePair from "./PokePair";
import ButtonDisplay from "./ButtonDisplay";
import ModalManager from "./ModalManager";
const Pokedex = require("pokeapi-js-wrapper");
const P = new Pokedex.Pokedex();

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
    this.pushToPairs = this.pushToPairs.bind(this);
  }

  async pushToPairs(a, b, found) {
    console.log(a, b, found);
    await this.fetchFromApi(a, b, false, found);
  }

  // Fetches all pokemon data on the ids given and updates the state
  async fetchFromApi(aId, bId, killed, found) {
    let newPair = { killed: killed, found: found };
    newPair.a = await P.getPokemonByName(aId);
    newPair.b = await P.getPokemonByName(bId);
    this.setState({ pairs: [...this.state.pairs, await newPair] });
  }

  componentDidMount() {
    // Hide the list of pairs until theyre all loaded
    this.setState({ hide: " d-none" });
    this.props.pairs.map(pair =>
      this.fetchFromApi(pair.a, pair.b, pair.killed, pair.found)
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
          pairs={this.state.pairs}
          add={{
            show: this.state.addModalShow,
            onHide: () => this.setState({ addModalShow: false }),
            add: this.pushToPairs
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
