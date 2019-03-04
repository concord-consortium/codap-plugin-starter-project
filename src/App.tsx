import React, { Component } from 'react';
import './App.css';
import codapInterface from './lib/CodapInterface';

class App extends Component {
  componentWillMount() {
    const interfaceConfig = {
      name: "Sample Plugin",
      dimensions: {
        width: 200,
        height: 200
      },
      version: "0.0.1",
      customInteractiveStateHandler: true
    };

    codapInterface.init(interfaceConfig);
  }

  render() {
    return (
      <div className="App">
        Hello World
      </div>
    );
  }
}

export default App;
