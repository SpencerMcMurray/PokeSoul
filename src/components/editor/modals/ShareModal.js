import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

const baseUrl = "https://spencermcmurray.github.io/editor/";

const genUrlFromPairs = pairs => {
  let urlPairs = [];
  for (let pair in pairs) {
    pair = pairs[pair];
    urlPairs.push({
      a: pair.a.id,
      b: pair.b.id,
      killed: pair.killed,
      found: pair.found
    });
  }
  return encodeURIComponent(JSON.stringify(urlPairs));
};

export default class AddPairModal extends Component {
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
            Shareable Link
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="title-font">Use this link to share your Soul Link</h4>
          <p style={{ wordWrap: "break-word" }}>
            <a href={baseUrl + genUrlFromPairs(this.props.pairs)}>
              {baseUrl + genUrlFromPairs(this.props.pairs)}
            </a>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
