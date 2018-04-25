import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";

import classes from "./Discover.css";

class Discover extends Component {
	state = {
		discoveredArray: [],
		year: null,
		sort_by: null
	}

	componentDidMount() {
		api.get("https://api.themoviedb.org/3/discover/movie?api_key=e474d4efb60111c6e12c76f0330b22e4&language=en-US&sort_by=popularity.desc&page=1")
			.then(res => {
				this.setState({
					discoveredArray: res.data.results
				});
			});
	}

	componentDidUpdate() {
		if ( this.state.year && this.state.sort_by ) {
			api.get(`https://api.themoviedb.org/3/discover/movie?api_key=e474d4efb60111c6e12c76f0330b22e4&language=en-US&sort_by=${this.state.sort_by}&page=1&year=${this.state.year}`)
				.then(res => {
					this.setState({
						discoveredArray: res.data.results
					});
				});
		}
	}

	onSubmitHandler = () => {

	}
	

	render() {
		const yearsArray = this.state.discoveredArray.map((obj, index) => {
			return Number(index + 1999);
		});
		return (
			<React.Fragment>
				<div className={classes.header}>
					<div className={classes.title}>
						Discover New Movies & TV Shows
					</div>
					<div className={classes.rightMenu}>
						<h3><Link 
							style={{textDecoration: "none", color: "black"}} 
							to="/discover/tv">TV Shows</Link></h3>
						<h3><Link
							style={{textDecoration: "none", color: "black"}} 
							to="/discover">Movies</Link></h3>
					</div>
				</div>

				<div className={classes.formContainer}>
					<form onSubmit={this.onSubmitHandler}>
						<select name="year">
							{yearsArray.map((_, index) => {
								return <option value={yearsArray[index]}>{yearsArray[index]}</option>
							})}
						</select>
						<select name="sort_by">
							<option value="popularity.desc">Popularity Descending</option>	
							<option value="popularity.asc">Popularity Ascending</option>	
						</select>
						<input type="submit" />
					</form>
				</div>
			</React.Fragment>
		);
	}
} 
	
export default Discover;