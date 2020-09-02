import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Codease</h1>
        <h2>A Platform to learn while coding.</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <iframe title="just a demo" height="400px" width="100%" src="https://repl.it/@shashankcic/MyProjectsWebsite?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
        </div>
      </header>
    </div>
  );
}

export default App;
