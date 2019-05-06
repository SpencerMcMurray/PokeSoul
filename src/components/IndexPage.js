import React, { Component } from "react";
import TitleDisplay from "./index/TitleDisplay";
import CreateLink from "./index/CreateLink";

export default class IndexPage extends Component {
  render() {
    return (
      <React.Fragment>
        <TitleDisplay />
        <CreateLink />
      </React.Fragment>
    );
  }
}
