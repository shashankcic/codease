import React from 'react';
import {} from 'tachyons';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="f1 grow light-yellow">Codease</h1>
        <h2 className="f3 dim washed-green">A Platform to learn while coding.</h2>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
          <iframe title="just a demo" height="400px" width="800px" src="https://repl.it/@shashankcic/MyProjectsWebsite?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
        </div>
      </header>
    </div>
  );
}

export default App;
