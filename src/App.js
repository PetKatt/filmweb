import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Layout from "./hoc/Layout";
import Navigation from "./components/Navigation/Navigation";
import Home from "./containers/Home/Home";
import Discover from "./containers/Discover/Discover";
import Popular from "./containers/Popular/Popular";
import People from "./containers/People/People";

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Layout>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/discover" component={Discover} />  
              <Route path="/person" component={People} />
            </Switch>

            <Route exact path="/movie" render={({ match }) => {
              return <Popular url={match.url} />
            }} />
            <Route exact path="/tv" render={({ match }) => {
              return <Popular url={match.url} />
            }} />
          </Layout>  
        </div>
      </Router>
    );
  }
}

export default App;
