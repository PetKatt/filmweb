import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import FilmPage from "./FilmPage/FilmPage";

import classes from "./PopularBox.css";

class PopularBox extends Component {
	render() {
		return (
			<React.Fragment>
				<div className={classes.PopularBox}>
					<div className={classes.Image}>
						<Link to={`${this.props.url}/${this.props.id}-${this.props.preparedTitle}`}>
							<img 
								src={`https://image.tmdb.org/t/p/w185/${this.props.imagePath}`} 
								alt={this.props.title} />
						</Link>
					</div>
					<div className={classes.Notes}>
						<div className={classes.Title}>
							<Link 
								style={{textDecoration: "none", color: "black"}} 
								to={`${this.props.url}/${this.props.id}-${this.props.preparedTitle}`}>
								{this.props.title}</Link>
						</div>		
						<div className={classes.Description}>{this.props.description}</div>		
						<div><span>Popularity: </span>{this.props.popularity}</div>		
						<div><span>Release Date: </span>{this.props.releaseDate}</div>		
						<div><span>Vote: </span>{this.props.vote}</div>		
					</div>
				</div>

				<Route
		      path={`${this.props.url}/${this.props.id}-${this.props.preparedTitle}`} 
		      render={() => {
		      	console.log(this.props);
		        return <FilmPage id={this.props.id} url={this.props.url} />
		      }} />
		  </React.Fragment>
		);
	}
}

export default PopularBox;