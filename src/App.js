import React, { Component } from 'react';
import './App.css';

import logo from './logo.svg';
import ferrySf from './ferrySf.jpg';

import 'materialize-css/dist/css/materialize.min.css';


class App extends Component {
  render() {
    return (


      <div className="App">

        <header className="App-header">
            <div class="row">
              <br/><br/>
            <div class="row">
              <div class="col s12 m12 l12">
                <h5 className="App-title">
                    <i>Average wait time </i>
                  </h5>
                </div>
              </div>
            <div class="col s12 m6 l6">
              <h2> 20 minutes </h2>
            </div>
            <div class="col s12 m6 l6">
              <h2> 11:23</h2>
            </div>
            </div>
        </header>

      <body className="App-body">

              <div class="row">
               <div class="col s12 m6 l6">
                          <i> Next Ferries Available</i>
                            <ol>
                              <p> 1. Oakland </p>
                              <p> 2 - Alameda </p>
                              <p> 3 - Sausalito </p>
                              <p> 1. Oakland </p>
                              <p> 2 - Alameda </p>
                              <p> 3 - Sausalito </p>
                              <p> 1. Oakland </p>
                              <p> 2 - Alameda </p>
                              <p> 3 - Sausalito </p>
                              <p> 1. Oakland </p>
                              <p> 2 - Alameda </p>
                              <p> 3 - Sausalito </p>
                            </ol>
                    </div>
                        </div>
      </body>


      <footer className="App-footer">
        <div class="row">
            <div class="col s12 m4">
                <img src={ferrySf} className="App-logo-static" style={styles.siteImage} alt="logo" />
            </div>
            <div class="col s12 m4">
              <h6 className="Welcome-title"> Welcome to San Francisco</h6>
              <h5 className="location"> Ferry Building </h5>
            </div>
            <div class="col s12 m4">
              <img src={logo} className="App-logo-static" alt="logo" />
            </div>
          </div>
      </footer>

<br/>

      </div>
    );
  }
}

const styles = {
  container: {
    textAlign: 'center',
  },
  siteImage: {
    borderRadius: 50,
  }
};


export default App;
