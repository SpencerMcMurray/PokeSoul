import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll/";

export default class TitleDisplay extends Component {
  render() {
    return (
      <div className="center-stage text-left title-font d-flex flex-wrap h-auto container justify-content-start align-items-center">
        <ScrollAnimation className="w-100" animateIn="fadeInLeft" delay={300}>
          <h1 className="display-4">PokéSoul</h1>
        </ScrollAnimation>
        <ScrollAnimation className="w-100" animateIn="fadeInRight" delay={600}>
          <p className="lead">
            The simple manager for the Pokémon Soul Link challenge
          </p>
        </ScrollAnimation>
      </div>
    );
  }
}
