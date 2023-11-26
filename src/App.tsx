import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bar from './components/Bar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Bar color='#f2168b' position='Tech (the real best team)'></Bar>
      </header>
    </div>
  );
}

export default App;
