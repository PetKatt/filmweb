import { FETCH_CONFIGURATION } from "../actions/types";
import { FETCH_FILMS } from "../actions/types";

const initialState = {
	items: [],
	config: {}
}

export default function(state=initialState, action) {
	switch(action.type) {
		case FETCH_FILMS:
			return {
				...state,
				items: action.payload
			};
		case FETCH_CONFIGURATION:
			return {
				...state,
				config: action.payload
			};
		default:
			return {
				...state
			};
	}
}