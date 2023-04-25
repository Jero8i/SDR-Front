import React from 'react';
import logo from './logo.svg';
import './App.css';
import services from './servicios';

function App() {
  const S = services
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="http://localhost:5225/Services"
          target="_blank"
          rel="noopener noreferrer"
        >
          Available Services
        </a>
        <S/>
      </header>
    </div>
  );
}

export default App;
