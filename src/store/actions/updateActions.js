import { 
	UPDATE_PAGE,
	UPDATE_SORTTYPE } from "./types";

export const updatePage = (pageNumber) => dispatch => {
	return dispatch({
		type: UPDATE_PAGE,
		payload: pageNumber
	});
}

export const updateSortType = (sortType) => dispatch => {
	return dispatch({
		type: UPDATE_SORTTYPE,
		payload: sortType
	});
}