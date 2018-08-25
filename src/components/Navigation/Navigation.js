import React from "react";
import { Link } from "react-router-dom";

import logo from "../../static/tmdb_logo.png";


const Navigation = () => (
	<ul className="navigation" role="navigation">	

		<li className="logo">
			<a href="https://www.themoviedb.org" target="_blank">
				<img src={logo} alt="Logo TMDB" />
			</a>
		</li>

		<li>
			<Link to="/discover/movie">DISCOVER
				<ul className="smallMenu">
					<li><Link to="/discover/movie">Movies</Link></li>
					<li><Link to="/discover/tv">TV Shows</Link></li>
				</ul>
			</Link>
		</li>
		<li>
			<Link to="/movie">MOVIES
				<ul className="smallMenu">
					<li><Link to="/movie">Popular</Link></li>
					<li><Link to="/movie/top-rated">TopRated</Link></li>
					<li><Link to="/movie/upcoming">Upcoming</Link></li>
					<li><Link to="/movie/now-playing">Now Playing</Link></li>
				</ul>
			</Link>
		</li>
		<li>
			<Link to="/tv">TV SHOWS
				<ul className="smallMenu">
					<li><Link to="/tv">Popular</Link></li>
					<li><Link to="/tv/top-rated">Top Rated</Link></li>
					<li><Link to="/tv/on-the-air">On TV</Link></li>
					<li><Link to="/tv/airing-today">Airing Today</Link></li>
				</ul>
			</Link>
		</li>
		<li className="people">
			<Link to="/person">PEOPLE
				<ul className="smallMenu">
					<li><Link to="/person">Popular People</Link></li>
				</ul>
			</Link>
		</li>

		<li><Link to="/login">LOGIN</Link></li>
		<li><Link to="/signup">SIGN UP</Link></li>

	</ul>
);

export default Navigation;