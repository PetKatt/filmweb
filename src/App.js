import React, { Component } from 'react';
import { Provider } from "react-redux";
import { 
  Route,
  Switch } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Navigation from "./components/Navigation/Navigation";
import Searchbox from "./components/Searchbox/Searchbox";
import Movies from "./components/Discover/Movies/Movies";

import './App.css';
import store from "./store";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Layout>
            <nav>
              <Navigation />
              <Searchbox />
            </nav>
            <main>

              <Switch>
                <DisplayRoute 
                  path="/discover/movie" 
                  component={Movies} />
              </Switch>

            </main>
          </Layout>          
        </div>
      </Provider>
    );
  }
}

const DisplayRoute = ({component: Component, path, ...rest}) => (
  <Route path={path} render={(props) => (
    <Component {...rest} />
  )} />
);

export default App;
