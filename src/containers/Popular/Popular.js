import React, { Component } from "react";
import api from "../../utils/api";
import Loader from "../../components/Loader/Loader";
import PopularBox from "../../components/PopularBox/PopularBox";

import classes from "./Popular.css";

class Popular extends Component {
	state = {
		popularArray: null
	}

	componentDidMount() {
		api.get(`https://api.themoviedb.org/3${this.props.url}/popular?api_key=e474d4efb60111c6e12c76f0330b22e4&language=en-US&page=1`)
			.then(res => {
				this.setState(() => ({
					popularArray: res.data.results
				}));	
			});
	}

	render() {
		let films = <Loader action="Loading . . ." />
		if (this.state.popularArray) {
			films = this.state.popularArray.map(film => {
				return <PopularBox 
					key={film.id}
					title={film.original_title}
					description={film.overview}
					popularity={film.popularity}
					imagePath={film.poster_path}
					releaseDate={film.release_date}
					vote={film.vote_average} />
			});
		} 
		return (
			<div className={classes.Popular}>
				{films}	
			</div>
		);
	}
}

export default Popular;