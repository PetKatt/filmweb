import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// import Loader from "../../Loader/Loader";
import Box from "../../Box/Box";

import { fetchDiscoverMovie } from "../../../store/actions/fetchActions";
import { 
	updatePage,
	updateSortType } from "../../../store/actions/updateActions";

import utils from "../../../utils/utils";


class Display extends Component {
	
	componentWillMount() {
		this.props.fetchDiscoverMovie();
	}

	shouldComponentUpdate(nextProps) {
		if(nextProps !== this.props) return true;
	}

	componentWillReceiveProps(nextProps) {
		this.props.fetchDiscoverMovie(nextProps.sortType, nextProps.page);
	}


	handleOnClick = () => {
		this.props.updatePage(this.props.page + 1);
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
					title={f.title}
					release={f.release_date}
					overview={utils.shortingText(f, i)}
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
				<div className="display__footer">
					<button onClick={this.handleOnClick}>Next Page</button>
					<div>Page {this.props.page}</div>	
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	films: state.films.items,
	config: state.films.config,
	page: state.update.page,
	sortType: state.update.sortType
});

export default connect(mapStateToProps, {
	fetchDiscoverMovie,
	updatePage,
	updateSortType
})(Display);