import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContainerHolder from './ContainerHolder';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <h1 className="display-3">Bruks data</h1>
        <ContainerHolder></ContainerHolder>
      </main>
      <footer>
        <i>
        <div>Eksperter i Team</div>
        <div>TIØ4852  -  The Big Bang of Internet</div>
        <div>Våren 2020</div>
        </i>
      </footer>
    </div>
  );
}

export default App;