import { 
	UPDATE_PAGE,
	UPDATE_SORTTYPE } from "../actions/types";

const initialState = {
	page: 1,
	sortType: "popularity.desc"
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
		default:
			return {
				...state
			};
	}
}