import React from 'react';
import logo from './logo.svg';
import './App.css';
import TeamMemberCard from "./components/TeamMemberCard";

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
          <br/>
          <TeamMemberCard color={"#F2168B"}
                          image={"https://i.postimg.cc/W3P4m9fD/Screenshot-2023-11-26-at-3-13-06-PM.png"}
                          firstName={"Bobby"}
                          lastName={"Hardaway"}/>
        </header>
      </div>
  );
}

export default App;
