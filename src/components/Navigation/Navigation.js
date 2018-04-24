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
					<h3>Discover</h3></Link></li>
				<li><Link style={{color: "white", textDecoration: "none"}} to="/movie">
					<h3>Movies</h3></Link></li>
				<li><Link style={{color: "white", textDecoration: "none"}} to="/tv">
					<h3>TV Shows</h3></Link></li>
				<li><Link style={{color: "white", textDecoration: "none"}} to="/person">
					<h3>People</h3></Link></li>
			</ul>
		</div>

		<div className={classes.NavRight}>
			<ul>
				<li><Link style={{color: "white", textDecoration: "none"}} to="signin">
					<h3>Sign IN</h3></Link></li>
				<li><Link style={{color: "white", textDecoration: "none"}} to="signup">
					<h3>Sign UP</h3></Link></li>
			</ul>
		</div>
			
	</div>
	
);

export default navigation;