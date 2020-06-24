import React from 'react';
import logo from './logo.svg';
import logo2 from './logo-2.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="inline-wheels">
          <img src={logo} className="App-logo-1 justify-start" alt="logo" />
          <img src={logo2} className="App-logo-2" alt="logo" />

        </div>
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
