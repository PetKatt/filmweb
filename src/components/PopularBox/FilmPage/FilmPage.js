import React, { Component } from "react";
import api from "../../../utils/api";

import classes from "./FilmPage.css";

class FilmPage extends Component {
	componentDidUpdate() {
		api.get(`https://api.themoviedb.org/3${this.props.url}/${this.props.id}?api_key=e474d4efb60111c6e12c76f0330b22e4&language=en-US`)
	}

	render() {
		return (
			<div className={classes.FilmPage}>
				<p>FILM PAGE!!!!</p>
			</div>
		);
	}
}

export default FilmPage;
