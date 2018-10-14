import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchSelectedMovie } from "../../store/actions/fetchActions";


class SelectedMovie extends Component {
	
	state = {
		movieID: this.props.match.params.movieID
	}

	componentDidMount() {
		this.props.fetchSelectedMovie(this.state.movieID);
	}

	render() {
		console.log("SelectedMovie Object: " + this.props.selectedMovie);
		return (
			<div>
				<h1>SELECTED MOVIE PAGE!  {this.state.movieID}</h1>
				<h3>{JSON.stringify(this.props.selectedMovie)}</h3>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	selectedMovie: state.films.selectedMovie
});

export default connect(mapStateToProps, {
	fetchSelectedMovie
})(SelectedMovie);