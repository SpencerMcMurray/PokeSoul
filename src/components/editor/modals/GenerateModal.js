import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import Party from "../Party";

// Gets all combinations of an array
const combs = arr => {
  if (arr.length === 0) {
    return [[]];
  }
  let cs = [];
  combs(arr.slice(1)).map(item => {
    cs.push(item);
    cs.push(item.concat([arr[0]]));
    return item;
  });
  return cs;
};

const getPartyBST = party => {
  let sumA = 0;
  let sumB = 0;
  for (let pair in party) {
    pair = party[pair];
    for (let baseStatA in pair.a.stats) {
      baseStatA = pair.a.stats[baseStatA].base_stat;
      sumA += baseStatA;
    }
    for (let baseStatB in pair.b.stats) {
      baseStatB = pair.b.stats[baseStatB].base_stat;
      sumB += baseStatB;
    }
  }
  return sumA + sumB / 2;
};

// Gets all valid parties from the given pairs
const getPartiesFromPairs = pairs => {
  // Remove any fainted pairs
  const livingPairs = pairs.filter(pair => !pair.killed);

  // Remove any parties with over 6 members
  // Then remove any parties with typing conflicts
  let allParties = combs(livingPairs);
  allParties = allParties
    .filter(team => team.length <= 6 && team.length > 0)
    .filter(team => {
      let typeSet = new Set();
      for (let pair in team) {
        pair = team[pair];
        console.log("pairs:", team);
        console.log("current:", pair);
        let numTypesA = pair.a.types.length;
        let numTypesB = pair.b.types.length;
        // Do individually to avoid teams with broken pairs
        if (typeSet.has(pair.a.types[numTypesA - 1].type.name)) {
          return false;
        }
        typeSet.add(pair.a.types[numTypesA - 1].type.name);
        if (typeSet.has(pair.b.types[numTypesB - 1].type.name)) {
          return false;
        }
        typeSet.add(pair.b.types[numTypesB - 1].type.name);
      }
      return true;
    });

  // Sort parties in descending order
  allParties.sort(
    (partyB, partyA) => getPartyBST(partyA) - getPartyBST(partyB)
  );
  return allParties.slice(0, 10);
};

export default class GenerateModal extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Generate Parties
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-wrap justify-content-center">
          {getPartiesFromPairs(this.props.pairs).map((party, idx) => (
            <Party idx={idx + 1} key={idx} members={party} />
          ))}
        </Modal.Body>
        <Modal.Footer>
          <small className="text-muted mr-auto">
            Parties are sorted in descending order by total BST averaged between
            players
          </small>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
