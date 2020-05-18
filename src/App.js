import React from 'react';
import logo from './logo.svg';
import './App.css';

require('dotenv').config()

class App extends React.Component {

  render() {
    const dotenv = require('dotenv')
const buf = Buffer.from('BASIC=basic')
    const config = dotenv.parse(process.env) // will return an object
    console.log(typeof config, config) // object { BASIC : 'basic' }
    console.log(process.env.project_id) 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
  
}

export default App;
