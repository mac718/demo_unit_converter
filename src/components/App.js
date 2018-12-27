import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h2>React Unit Converter</h2>
        </header>
        <div className="App-body container"> 
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
