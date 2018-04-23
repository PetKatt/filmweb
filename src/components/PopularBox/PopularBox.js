import React from "react";

import classes from "./PopularBox.css";

const popularBox = (props) => (
	<div className={classes.PopularBox}>
		<div>
			<img src={`https://image.tmdb.org/t/p/w185/${props.imagePath}`} alt={props.title} />
		</div>
		<div className={classes.Notes}>
			<div className={classes.Title}>{props.title}</div>		
			<div>{props.description}</div>		
			<div>{props.popularity}</div>		
			<div>{props.releaseDate}</div>		
			<div>{props.vote}</div>		
		</div>
	</div>
);

export default popularBox;