import React, { Component } from 'react';
import Layout from "./hoc/Layout";
import Navigation from "./components/Navigation/Navigation";
import FilmsScanner from "./containers/FilmsScanner/FilmsScanner";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Layout>
          <FilmsScanner />
        </Layout>  
      </div>
    );
  }
}

export default App;
