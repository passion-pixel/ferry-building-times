import React, { Component } from 'react';
import logo from './logo.svg';

import ferrySf from './ferrySf.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h2 className="App-title">
            <i>Average wait time </i>
                <p><h1> 20 minutes </h1></p>
                <p> </p>
          </h2>



        </header>
        <p className="App-intro">

          <i> Average wait time
          </i>
            <p> 20 minutes </p>

        </p>

        <p className="App-wait-time">

          <i> Next Ferries Available</i>
            <ol>
              <p> 1. Oakland </p>
              <p> 2 - Alameda </p>
              <p> 3 - Sausalito </p>
            </ol>
        </p>

        <div className="App-footer">
          <footer className="App-footer">

          <img src={ferrySf} className="App-logo-static" alt="logo" />
          <h2 className="Welcome-title"> Welcome to San Francisco</h2>
          <h1 className="location"> Ferry Building </h1>
          <img src={logo} className="App-logo-static" alt="logo" />
          </footer>
        </div>

      </div>
    );
  }
}

export default App;

//dfafd
