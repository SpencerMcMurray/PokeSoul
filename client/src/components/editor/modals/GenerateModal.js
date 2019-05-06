import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import Party from "../Party";

// Gets all permutations of an array
const perms = arr => {
  let ret = [];

  for (let i = 0; i < arr.length; i = i + 1) {
    let rest = perms(arr.slice(0, i).concat(arr.slice(i + 1)));

    if (!rest.length) {
      ret.push([arr[i]]);
    } else {
      for (let j = 0; j < rest.length; j = j + 1) {
        ret.push([arr[i]].concat(rest[j]));
      }
    }
  }
  return ret;
};

const getPartyBST = party => {
  const sumStats = (acc, cur) => acc + cur.base_stat;
  const sumPartyA = (acc, cur) => acc + cur.a.stats.reduce(sumStats);
  const sumPartyB = (acc, cur) => acc + cur.b.stats.reduce(sumStats);
  return (party.reduce(sumPartyA) + party.reduce(sumPartyB)) / 2;
};

// Gets all valid parties from the given pairs
const getPartiesFromPairs = pairs => {
  // Remove any fainted pairs
  const livingPairs = pairs.filter(pair => !pair.killed);

  // Remove any parties with over 6 members
  // Then remove any parties with typing conflicts
  let allParties = perms(livingPairs);
  // .filter(team => team.length <= 6)
  // .filter(team => {
  //   let typeSet = new Set();
  //   for (let pair in team) {
  //     // Do individually to avoid teams with broken pairs
  //     if (typeSet.has(pair.a.types[0])) {
  //       return false;
  //     }
  //     typeSet.add(pair.a.types[0]);
  //     if (typeSet.has(pair.b.types[0])) {
  //       return false;
  //     }
  //     typeSet.add(pair.b.types[0]);
  //   }
  //   return true;
  // });

  allParties.sort(
    (partyB, partyA) => getPartyBST(partyA) - getPartyBST(partyB)
  );
  console.log(allParties);
  return [pairs];
};

export default class GenerateModal extends Component {
  state = {
    parties: this.props.pairs
  };

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
          <Modal.Title id="contained-modal-title-vcenter">
            Generate Parties
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-wrap justify-content-center">
          {getPartiesFromPairs(this.state.parties).map((party, idx) => (
            <Party idx={idx + 1} key={idx} members={party} />
          ))}
        </Modal.Body>
        <Modal.Footer>
          <small className="text-muted mr-auto">
            Parties are sorted in descending order by total BST
          </small>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
