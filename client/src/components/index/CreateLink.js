import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll/";

export default class CreateLink extends Component {
  render() {
    return (
      <div className="text-center d-flex container justify-content-center align-items-center">
        <ScrollAnimation delay={1000} animateIn="fadeIn">
          <Link to="/editor">
            <Button variant="success">Create a Soul Link</Button>
          </Link>
        </ScrollAnimation>
      </div>
    );
  }
}
