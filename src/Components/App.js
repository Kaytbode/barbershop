import React from 'react';
import logo from '../logo.svg';
import '../Stylesheets/App.css';
import Signup from './Signup';
import NavViewer from '../Views/navbar';

function App() {
  return (
    <div className="App">
      <NavViewer />
      <Signup />
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

export default App;
