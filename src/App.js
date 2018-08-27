import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Navigation from "./components/Navigation/Navigation";
import Searchbox from "./components/Searchbox/Searchbox";

import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Layout>
            <nav>
              <Navigation />
              <Searchbox />
            </nav>
            <main>
              
            </main>
          </Layout>          
        </div>
      </Router>
    );
  }
}

export default App;
