import axios from "axios";

import { FETCH_CONFIGURATION } from "./types";
import { FETCH_FILMS, FETCH_PEOPLE } from "./types";


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
export const fetchDiscoverMovie = (sortBy, pageNumber) => dispatch => {

	if(!sortBy) sortBy = "popularity.desc";
	if(!pageNumber) pageNumber = 1;

	const fetchDiscoverMovieAPI = `https://api.themoviedb.org/3/discover/movie?api_key=e474d4efb60111c6e12c76f0330b22e4&language=en-US&sort_by=${sortBy}&page=${pageNumber}`;

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


//DiscoverTv API
const fetchDiscoverTvAPI = "https://api.themoviedb.org/3/discover/tv?api_key=e474d4efb60111c6e12c76f0330b22e4&language=en-US&sort_by=popularity.desc&page=1";

export const fetchDiscoverTv = () => dispatch => {
	axios.get(fetchDiscoverTvAPI)
		.then(res => {
			let films = res.data.results;
			return dispatch({
				type: FETCH_FILMS,
				payload: films
			});
		})
		.catch(err => {
			console.log(err);
			throw new Error("Error in fetching Discover Tv Array");
		});
}


//MoviesPopular API
const fetchMoviesPopularAPI = "https://api.themoviedb.org/3/movie/popular?api_key=e474d4efb60111c6e12c76f0330b22e4&language=en-US&page=1";

export const fetchMoviesPopular = () => dispatch => {
	axios.get(fetchMoviesPopularAPI)
		.then(res => {
			let films = res.data.results;
			return dispatch({
				type: FETCH_FILMS,
				payload: films
			});
		})
		.catch(err => {
			console.log(err);
			throw new Error("Error in fetching Movies Popular Array");
		});
}


//MoviesTopRated API
const fetchMoviesTopRatedAPI = "https://api.themoviedb.org/3/movie/top_rated?api_key=e474d4efb60111c6e12c76f0330b22e4&language=en-US&page=1";

export const fetchMoviesTopRated = () => dispatch => {
	axios.get(fetchMoviesTopRatedAPI)
		.then(res => {
			let films = res.data.results;
			return dispatch({
				type: FETCH_FILMS,
				payload: films
			});
		})
		.catch(err => {
			console.log(err);
			throw new Error("Error in fetching Movies TopRated Array");
		});
}


//MoviesUpcoming API
const fetchMoviesUpcomingAPI = "https://api.themoviedb.org/3/movie/upcoming?api_key=e474d4efb60111c6e12c76f0330b22e4&language=en-US&page=1";

export const fetchMoviesUpcoming = () => dispatch => {
	axios.get(fetchMoviesUpcomingAPI)
		.then(res => {
			let films = res.data.results;
			return dispatch({
				type: FETCH_FILMS,
				payload: films
			});
		})
		.catch(err => {
			console.log(err);
			throw new Error("Error in fetching Movies Upcoming Array");
		});
}


//MoviesNowPlaying API
const fetchMoviesNowPlayingAPI = "https://api.themoviedb.org/3/movie/now_playing?api_key=e474d4efb60111c6e12c76f0330b22e4&language=en-US&page=1";

export const fetchMoviesNowPlaying = () => dispatch => {
	axios.get(fetchMoviesNowPlayingAPI)
		.then(res => {
			let films = res.data.results;
			return dispatch({
				type: FETCH_FILMS,
				payload: films
			});
		})
		.catch(err => {
			console.log(err);
			throw new Error("Error in fetching Movies NowPlaying Array");
		});
}


//TVShowsPopular API
const fetchTVShowsPopularAPI = "https://api.themoviedb.org/3/tv/popular?api_key=e474d4efb60111c6e12c76f0330b22e4&language=en-US&page=1";

export const fetchTVShowsPopular = () => dispatch => {
	axios.get(fetchTVShowsPopularAPI)
		.then(res => {
			let films = res.data.results;
			return dispatch({
				type: FETCH_FILMS,
				payload: films
			});
		})
		.catch(err => {
			console.log(err);
			throw new Error("Error in fetching TVShows Popular Array");
		});
}


//TVShowsTopRated API
const fetchTVShowsTopRatedAPI = "https://api.themoviedb.org/3/tv/top_rated?api_key=e474d4efb60111c6e12c76f0330b22e4&language=en-US&page=1";

export const fetchTVShowsTopRated = () => dispatch => {
	axios.get(fetchTVShowsTopRatedAPI)
		.then(res => {
			let films = res.data.results;
			return dispatch({
				type: FETCH_FILMS,
				payload: films
			});
		})
		.catch(err => {
			console.log(err);
			throw new Error("Error in fetching TVShows TopRated Array");
		});
}


//TVShowsOnTV API
const fetchTVShowsOnTVAPI = "https://api.themoviedb.org/3/tv/on_the_air?api_key=e474d4efb60111c6e12c76f0330b22e4&language=en-US&page=1";

export const fetchTVShowsOnTV = () => dispatch => {
	axios.get(fetchTVShowsOnTVAPI)
		.then(res => {
			let films = res.data.results;
			return dispatch({
				type: FETCH_FILMS,
				payload: films
			});
		})
		.catch(err => {
			console.log(err);
			throw new Error("Error in fetching TVShows OnTV Array");
		});
}


//TVShowsAiringToday API
const fetchTVShowsAiringTodayAPI = "https://api.themoviedb.org/3/tv/airing_today?api_key=e474d4efb60111c6e12c76f0330b22e4&language=en-US&page=1";

export const fetchTVShowsAiringToday = () => dispatch => {
	axios.get(fetchTVShowsAiringTodayAPI)
		.then(res => {
			let films = res.data.results;
			return dispatch({
				type: FETCH_FILMS,
				payload: films
			});
		})
		.catch(err => {
			console.log(err);
			throw new Error("Error in fetching TVShows AiringToday Array");
		});
}


//PopularPerson API
const fetchPopularPersonAPI = "https://api.themoviedb.org/3/person/popular?api_key=e474d4efb60111c6e12c76f0330b22e4&language=en-US&page=1";

export const fetchPopularPerson = () => dispatch => {
	axios.get(fetchPopularPersonAPI)
		.then(res => {
			let people = res.data.results;
			return dispatch({
				type: FETCH_PEOPLE,
				payload: people
			});
		})
		.catch(err => {
			console.log(err);
			throw new Error("Error in fetching PopularPerson Array");
		});
}