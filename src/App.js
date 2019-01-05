import React, { Component } from 'react';
import './App.css';
import RouteComponent from './router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RouteComponent />
      </div>
    );
  }
}

export default App;
