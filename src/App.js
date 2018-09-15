import React, { Component } from 'react';
import { Provider } from "react-redux";
import { Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Navigation from "./components/Navigation/Navigation";
import Searchbox from "./components/Searchbox/Searchbox";

import Movies from "./components/Discover/Movies/Movies";
import TVShows from "./components/Discover/TVShows/TVShows";

import PopularM from "./components/Movies/PopularM/PopularM";
import TopRatedM from "./components/Movies/TopRatedM/TopRatedM";
import Upcoming from "./components/Movies/Upcoming/Upcoming";
import NowPlaying from "./components/Movies/NowPlaying/NowPlaying";

import Popular from "./components/TVShows/Popular/Popular";
import TopRated from "./components/TVShows/TopRated/TopRated";
import OnTV from "./components/TVShows/OnTV/OnTV";
import AiringToday from "./components/TVShows/AiringToday/AiringToday";

import PopularPeople from "./components/People/PopularPeople";

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
              
              <DisplayRoute 
                path="/discover/movie" 
                component={Movies} />
              <DisplayRoute 
                path="/discover/tv" 
                component={TVShows} />

              <DisplayRoute 
                path="/movie" 
                component={PopularM} />
              <DisplayRoute 
                path="/movie/top-rated" 
                component={TopRatedM} />
              <DisplayRoute 
                path="/movie/upcoming" 
                component={Upcoming} />
              <DisplayRoute 
                path="/movie/now-playing" 
                component={NowPlaying} />

              <DisplayRoute 
                path="/tv" 
                component={Popular} />
              <DisplayRoute 
                path="/tv/top-rated" 
                component={TopRated} />
              <DisplayRoute 
                path="/tv/on-the-air" 
                component={OnTV} />
              <DisplayRoute 
                path="/tv/airing-today" 
                component={AiringToday} />

              <DisplayRoute 
                path="/person" 
                component={PopularPeople} />
              
            </main>
          </Layout>          
        </div>
      </Provider>
    );
  }
}

const DisplayRoute = ({component: Component, path, ...rest}) => (
  <Route exact path={path} render={(props) => (
    <Component {...rest} />
  )} />
);

export default App;
