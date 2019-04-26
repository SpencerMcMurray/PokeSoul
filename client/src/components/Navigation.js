import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const pairs = [
  { a: "Snorlax", b: "Politoed" },
  { a: "Pikachu", b: "Mudkip" },
  { a: "Magneton", b: "Politoed" }
];

const mainLinks = [
  {
    icon: "",
    title: "Editor",
    pairs: pairs,
    href: "/editor/" + encodeURIComponent(JSON.stringify(pairs))
  }
];

const makeNavItem = (link, idx) => {
  return (
    <Nav.Item key={idx}>
      <Nav.Link as={Link} to={link.href} params={link.pairs}>
        {link.icon} {link.title}
      </Nav.Link>
    </Nav.Item>
  );
};

export default class Navigation extends Component {
  render() {
    return (
      <Navbar
        variant="dark"
        sticky="top"
        expand="lg"
        style={{ background: "#1F1F1F" }}
        className="title-font"
      >
        <Navbar.Brand href="/" style={{ fontSize: "1.5rem" }}>
          PokéSoul
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">{mainLinks.map(makeNavItem)}</Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
