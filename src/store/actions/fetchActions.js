import axios from "axios";

import { FETCH_CONFIGURATION } from "./types";
import { FETCH_FILMS } from "./types";


// Configuration API
const fetchConfigurationAPI = "https://api.themoviedb.org/3/configuration?api_key=e474d4efb60111c6e12c76f0330b22e4";

export const fetchConfiguration = () => dispatch => {
	axios.get(fetchConfigurationAPI)
		.then(res => {
			let config = res.data;
			return dispatch({
				type: FETCH_CONFIGURATION,
				payload: config
			});
		})
		.catch(err => {
			console.log(err);
			throw new Error("Error in fetch Configuration Object");
		});
}


// DiscoverMovie API
const fetchDiscoverMovieAPI = "https://api.themoviedb.org/3/discover/movie?api_key=e474d4efb60111c6e12c76f0330b22e4&language=en-US&sort_by=popularity.desc&page=1"

export const fetchDiscoverMovie = () => dispatch => {
	axios.get(fetchDiscoverMovieAPI)
		.then(res => {
			let films = res.data.results;
			return dispatch({
				type: FETCH_FILMS,
				payload: films
			});
		})
		.catch(err => {
			console.log(err);
			throw new Error("Error in fetching Discover Movies Array");
		});
}