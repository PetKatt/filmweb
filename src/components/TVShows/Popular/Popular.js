import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// import Loader from "../../Loader/Loader";
import Box from "../../Box/Box";

import { fetchTVShowsPopular } from "../../../store/actions/fetchActions";
import utils from "../../../utils/utils";


class Display extends Component {
	
	componentWillMount() {
		this.props.fetchTVShowsPopular();
	}


	render() {
		const { films, config } = this.props;
		// console.log("FILMS from Movies.js", films);
		// console.log("CONFIG from Movies.js", config);
		

		const f = films.map((f, i) => {
			return (
				<Box
					key={i}
					id={f.id}
					posterURL={`${config.images.secure_base_url}${config.images.poster_sizes[2]}${f.poster_path}`}
					avg={f.vote_average}
					title={f.name}
					release={f.first_air_date}
					overview={utils.shortingText(f, i)}
				/>
			);
		});

		return(
			<div className="display">

				<div className="display__header">
					<div className="display__header__title">
						<h2>Popular TV Shows</h2>
					</div>
					<div className="display__header__links">
						<Link to="/tv">Popular</Link>
						<Link to="/tv/top-rated">Top Rated</Link>
						<Link to="/tv/on-the-air">On TV</Link>
						<Link to="/tv/airing-today">Airing Today</Link>
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
	fetchTVShowsPopular
})(Display);