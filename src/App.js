import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import Toggle from './Todos.js';

class App extends ReactComponent() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Vison App</h1>
      </header>
      <Toggle>
        <h1> Hi There </h1>
      </Toggle>
    </div>
    
  );
}

//export default App;
