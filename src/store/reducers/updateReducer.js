import { 
	UPDATE_PAGE,
	UPDATE_SORTTYPE,
	UPDATE_YEAR } from "../actions/types";

const initialState = {
	page: 1,
	sortType: "popularity.desc",
	year: 2018
}

export default function(state=initialState, action) {
	switch(action.type) {
		case UPDATE_PAGE:
			return {
				...state,
				page: action.payload
			};
		case UPDATE_SORTTYPE:
			return {
				...state,
				sortType: action.payload
			};
		case UPDATE_YEAR:
			return {
				...state,
				year: action.payload
			};
		default:
			return {
				...state
			};
	}
}