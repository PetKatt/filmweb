import React, { Component } from "react";

class Filter extends Component {

	state = {
		selected: "popularity.desc",
		year: 2018
	}

	handleYearChange = (e) => {
		this.setState({ year: e.target.value });
		this.props.updateYear(e.target.value);
	}

	handleSortTypeChange = (e) => {
		this.setState({ selected: e.target.value });
		this.props.updateSortType(e.target.value);
	}

	optionListCreator = () => {
		const numArray = [];
		for(let i = 0; i < 120; i++) {
			numArray.unshift(i);
		}
		return numArray.map(number => (
			<option value={number + 1900}>{number + 1900}</option>
		));
	}

	render() {
		return (
			<div className="filter">

				<label>
					Year
					<select value={this.state.year} onChange={this.handleYearChange}>
						{this.optionListCreator()}
					</select>
				</label>

				<label>
					Sort By
					<select value={this.state.selected} onChange={this.handleSortTypeChange}>
						<option value="popularity.desc">Popularity Descending</option>
						<option value="popularity.asc">Popularity Ascending</option>
						<option value="vote_average.desc">Rating Descending</option>
						<option value="vote_average.asc">Rating Ascending</option>
						<option value="release_date.desc">Release Date Descending</option>
						<option value="release_date.asc">Release Date Ascending</option>
						<option value="original_title.desc">Title (A-Z)</option>
						<option value="original_title.asc">Title (Z-A)</option>
					</select>
				</label>
			</div>
		);
	}
}

export default Filter;