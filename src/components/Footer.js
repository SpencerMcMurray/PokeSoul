import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer
        className="text-muted"
        style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
      >
        <div className="container text-right">
          <small>
            All Pokémon data is fetched from{" "}
            <a href="https://pokeapi.co/">PokéAPI</a>
          </small>
          <br />
          <small>
            You can find the source code{" "}
            <a href="https://github.com/SpencerMcMurray/PokeSoul">
              in this repository
            </a>
          </small>
          <br />
          <small>
            To report any bugs/suggestions,{" "}
            <a href="mailto:pokesoul.report@yahoo.com">email me</a>
          </small>
        </div>
      </footer>
    );
  }
}
