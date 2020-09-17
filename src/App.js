import React from 'react';
import {} from 'tachyons';
import Particle from './Components/Particle';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" style={{position: 'relative'}}>
      <div style={{position: 'absolute', width: "100%"}}>
        <Particle />
      </div>
      <>
        <header className="App-header">
          <h1 className="f1 grow light-yellow">Codease</h1>
          <h2 className="f3 grow dim washed-green">A Platform to learn while coding.</h2>
          <div>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="repl-div">
            <iframe className="repl" title="just a demo" height="400px" src="https://repl.it/@shashankcic/MyProjectsWebsite?lite=true" scrolling="no" frameBorder="no" allowtransparency="true" allowFullScreen={true} sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
          </div>
        </header>
      </>
    </div>
  );
}

export default App;
