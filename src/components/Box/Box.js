import React from "react";
import { Link } from "react-router-dom";


const Box = (props) => (
	<div className="box">
		<div className="box__poster">
			<Link to={`/movie/${props.id}`}>
				<img src={props.posterURL} alt={`Poster for ${props.title}`}></img>
			</Link>
		</div>
			
		<div className="box__details">
			<div className="box__details__header">
				<p className="box-avg">{props.avg}</p>
				<div className="box-title">
					<h3>
						<Link to={`/movie/${props.id}`}>{props.title}</Link>
					</h3>
					<h5>{props.release}</h5>
				</div>
			</div>
			<div className="box__details__main">
				{props.overview}
			</div>
			<button className="box-btn">
				<Link to={`/movie/${props.id}`}>More info...</Link>
			</button>
		</div>	
	</div>
);

export default Box;