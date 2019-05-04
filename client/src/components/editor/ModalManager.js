import React, { Component } from "react";
import AddPairModal from "./modals/AddPairModal";
import GenerateModal from "./modals/GenerateModal";
import ShareModal from "./modals/ShareModal";

export default class ModalManager extends Component {
  render() {
    return (
      <React.Fragment>
        <AddPairModal
          show={this.props.add.show}
          onHide={this.props.add.onHide}
        />
        <GenerateModal
          show={this.props.generate.show}
          onHide={this.props.generate.onHide}
        />
        <ShareModal
          show={this.props.share.show}
          onHide={this.props.share.onHide}
        />
      </React.Fragment>
    );
  }
}
