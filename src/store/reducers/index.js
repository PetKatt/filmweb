import { combineReducers } from "redux";

import fetchReducer from "./fetchReducer";
import updateReducer from "./updateReducer";


export default combineReducers({
	films: fetchReducer,
	update: updateReducer
});