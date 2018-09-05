import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// import Loader from "../../Loader/Loader";
import Box from "../../Box/Box";

import { fetchDiscoverMovie } from "../../../store/actions/fetchActions";


class Display extends Component {
	
	componentWillMount() {
		this.props.fetchDiscoverMovie();
	}

	render() {
		const { films, config } = this.props;
		// console.log("FILMS from Movies.js", films);
		// console.log("CONFIG from Movies.js", config);
		

		const f = films.map((f, i) => {
			const overview = [];
			const overviewSliced = [];

			overview[i] = f.overview.split("");
			if(overview[i].length > 400) {
				let dif = overview[i].length - 400;
				overview[i].splice(400, dif, "...");
				overviewSliced[i] = overview[i].join("");
			} else {
				overviewSliced[i] = f.overview;
			}

			return (
				<Box
					key={i}
					id={f.id}
					posterURL={`${config.images.secure_base_url}${config.images.poster_sizes[2]}${f.poster_path}`}
					avg={f.vote_average}
					title={f.title}
					release={f.release_date}
					overview={overviewSliced[i]}
				/>
			);
		});

		return(
			<div className="display">

				<div className="display__header">
					<div className="display__header__title">
						<h2>Discover New Movies & TV Shows</h2>
					</div>
					<div className="display__header__links">
						<Link to="/discover/movie">Movies</Link>
						<Link to="/discover/tv">TV Shows</Link>
					</div>
				</div>

				<div className="display__container">
					{f}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	films: state.films.items,
	config: state.films.config
});

export default connect(mapStateToProps, {
	fetchDiscoverMovie
})(Display);