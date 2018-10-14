import { FETCH_CONFIGURATION } from "../actions/types";
import { FETCH_FILMS, FETCH_PEOPLE } from "../actions/types";
import { FETCH_SELECTEDMOVIE } from "../actions/types";

const initialState = {
	items: [],
	people: [],
	config: {},
	selectedMovie: {}
}

export default function(state=initialState, action) {
	switch(action.type) {
		case FETCH_FILMS:
			return {
				...state,
				items: action.payload
			};
		case FETCH_PEOPLE:
			return {
				...state,
				people: action.payload
			};
		case FETCH_CONFIGURATION:
			return {
				...state,
				config: action.payload
			};
		case FETCH_SELECTEDMOVIE:
			return {
				...state,
				selectedMovie: action.payload
			}
		default:
			return {
				...state
			};
	}
}