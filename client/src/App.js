import React, { Component } from 'react';
import IndexPage from './components/IndexPage';
import './styles/App.css';

export default class App extends Component {
  render() {
    return (
      <div id="main">
        <IndexPage />
      </div>
    );
  }
}
