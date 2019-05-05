import React, { Component } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
const Pokedex = require("pokeapi-js-wrapper");
const P = new Pokedex.Pokedex();

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

const getIdFromUrl = url => {
  const x = url.split("/");
  return x[x.length - 2];
};

export default class AddPairModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mons: [],
      searchAMons: [],
      searchBMons: [],
      searchA: "",
      searchB: "",
      pickedA: "1",
      pickedB: "1",
      found: ""
    };

    this.addPair = this.addPair.bind(this);
  }

  async componentDidMount() {
    const allMons = (await P.getPokemonsList()).results;
    this.setState({
      mons: await allMons,
      searchAMons: await allMons,
      searchBMons: await allMons
    });
    console.log(await this.state);
  }

  addPair() {
    console.log(this.state.pickedA, this.state.pickedB, this.state.found);
    this.props.add(this.state.pickedA, this.state.pickedB, this.state.found);
    this.props.onHide();
  }

  render() {
    console.log(this.props);
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Add Pair</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Row>
              <Form.Group as={Col} controlId="found">
                <Form.Label>Location Met</Form.Label>
                <Form.Control
                  value={this.state.found}
                  onChange={evt => this.setState({ found: evt.target.value })}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="selectA">
                <Form.Label>First Pokémon</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.pickedA}
                  onChange={evt => this.setState({ pickedA: evt.target.value })}
                >
                  {this.state.searchAMons.map((item, idx) => (
                    <option key={idx} value={getIdFromUrl(item.url)}>
                      {capitalize(item.name)}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="selectB">
                <Form.Label>Second Pokémon</Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.pickedB}
                  onChange={evt => this.setState({ pickedB: evt.target.value })}
                >
                  {this.state.searchBMons.map((item, idx) => (
                    <option key={idx} value={getIdFromUrl(item.url)}>
                      {capitalize(item.name)}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form.Row>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.add} variant="success">
              Add
            </Button>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}
