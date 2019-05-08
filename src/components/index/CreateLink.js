import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll/";

export default class CreateLink extends Component {
  render() {
    return (
      <div className="text-center d-flex container justify-content-around align-items-center">
        <ScrollAnimation delay={1750} animateIn="bounceIn">
          <Link
            to={"/editor/" + encodeURIComponent(JSON.stringify({ load: true }))}
          >
            <Button size="lg" variant="primary">
              Load last Soul Link
            </Button>
          </Link>
        </ScrollAnimation>
        <ScrollAnimation delay={1750} animateIn="bounceIn">
          <Link
            to={"/editor/" + encodeURIComponent(JSON.stringify({ new: true }))}
          >
            <Button size="lg" variant="success">
              Create a Soul Link
            </Button>
          </Link>
        </ScrollAnimation>
      </div>
    );
  }
}
