import React from "react";
import { Link, Route } from "react-router-dom";
import FilmPage from "./FilmPage/FilmPage";

import classes from "./PopularBox.css";

const popularBox = (props, match) => (
	<React.Fragment>
		<div className={classes.PopularBox}>
			<div className={classes.Image}>
				<Link to={`${props.url}/${props.id}-${props.preparedTitle}`}>
					<img 
						src={`https://image.tmdb.org/t/p/w185/${props.imagePath}`} 
						alt={props.title} />
				</Link>
			</div>
			<div className={classes.Notes}>
				<div className={classes.Title}>
					<Link 
						style={{textDecoration: "none", color: "black"}} 
						to={`${props.url}/${props.id}-${props.preparedTitle}`}>
						{props.title}</Link>
				</div>		
				<div className={classes.Description}>{props.description}</div>		
				<div><span>Popularity: </span>{props.popularity}</div>		
				<div><span>Release Date: </span>{props.releaseDate}</div>		
				<div><span>Vote: </span>{props.vote}</div>		
			</div>
		</div>

		<Route
		      path={`${match.url}/:id`} 
		      render={({ match }) => {
		      	console.log(match);
		        return <FilmPage id={props.id} url={match.url} />
		      }} />
  </React.Fragment>
);

export default popularBox;