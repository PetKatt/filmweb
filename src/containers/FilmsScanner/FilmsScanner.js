import React, { Component } from "react";
import api from "../../utils/api";

import classes from "./FilmsScanner.css";

class FilmsScanner extends Component {
	componentDidMount() {
		api.get("https://api.themoviedb.org/3/movie/top_rated?api_key=e474d4efb60111c6e12c76f0330b22e4&language=en-US&page=1");
	}

	render() {
		return (
			<div className={classes.FilmsScanner}>
				
			</div>
		);
	}
}

export default FilmsScanner;