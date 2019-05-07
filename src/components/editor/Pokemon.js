import React, { Component } from "react";
import { Card, Badge } from "react-bootstrap";

const typeColours = {
  normal: "#A8A878",
  fire: "#F08030",
  fighting: "#C03028",
  water: "#6890F0",
  flying: "#A890F0",
  grass: "#78C850",
  poison: "#A040A0",
  electric: "#F8D030",
  ground: "#E0C068",
  psychic: "#F85888",
  rock: "#B8A038",
  ice: "#98D8D8",
  bug: "#A8B820",
  dragon: "#7038F8",
  ghost: "#705898",
  dark: "#705848",
  steel: "#B8B8D0",
  fairy: "#EE99AC"
};

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

export default class Pokemon extends Component {
  render() {
    console.log(this.props.poke);
    return (
      <Card style={{ width: "11rem", minWidth: "12vh" }}>
        <Card.Header className="title-font">
          {capitalize(this.props.poke.name)}
        </Card.Header>
        <Card.Img
          className="m-auto"
          style={{ width: "12vh" }}
          src={this.props.poke.sprites.front_default}
        />
        <div className="mb-2">
          {this.props.poke.types.map((item, idx) => {
            return (
              <Badge
                style={{ backgroundColor: typeColours[item.type.name] }}
                variant="primary"
                className={idx === 0 ? "" : "ml-2"}
                key={idx}
              >
                {capitalize(item.type.name)}
              </Badge>
            );
          })}
        </div>
      </Card>
    );
  }
}
