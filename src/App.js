import React, { Component } from 'react';
import Layout from "./hoc/Layout";
import Navigation from "./components/Navigation/Navigation";
import Popular from "./containers/Popular/Popular";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Layout>
          <Popular />
        </Layout>  
      </div>
    );
  }
}

export default App;
