import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Navigation from "./components/Navigation/Navigation";

import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Layout>
            <Navigation />
          </Layout>          
        </div>
      </Router>
    );
  }
}

export default App;
