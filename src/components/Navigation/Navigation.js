import React from "react";
import { Link } from "react-router-dom";

import classes from "./Navigation.css";
import logo from "../../assets/img/logo.svg";

const navigation = () => (	
	<div className={classes.Navigation}>
		
			<Link to="/">
				<img src={logo} alt="TMDb" />
			</Link>
		
		<div className={classes.NavLeft}>
			<ul>
				<li><Link style={{color: "white", textDecoration: "none"}} to="/discover">
					Discover</Link></li>
				<li><Link style={{color: "white", textDecoration: "none"}} to="/movie">
					Movies</Link></li>
				<li><Link style={{color: "white", textDecoration: "none"}} to="/tv">
					TV Shows</Link></li>
				<li><Link style={{color: "white", textDecoration: "none"}} to="/person">
					People</Link></li>
			</ul>
		</div>

		<div className={classes.NavRight}>
			<ul>
				<li><Link style={{color: "white", textDecoration: "none"}} to="signin">
					Sign IN</Link></li>
				<li><Link style={{color: "white", textDecoration: "none"}} to="signup">
					Sign UP</Link></li>
			</ul>
		</div>
			
	</div>
	
);

export default navigation;