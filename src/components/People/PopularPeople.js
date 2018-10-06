import React, { Component } from "react";
import { connect } from "react-redux";

// import Loader from "../../Loader/Loader";
import PeopleBox from "../Box/PeopleBox/PeopleBox";

import { fetchPopularPerson } from "../../store/actions/fetchActions";
import utils from "../../utils/utils";


class Display extends Component {
	
	componentWillMount() {
		this.props.fetchPopularPerson();
	}


	render() {
		const { people, config } = this.props;
		// console.log("FILMS from Movies.js", films);
		// console.log("CONFIG from Movies.js", config);
		

		const p = people.map((p, i) => {
			return (
				<PeopleBox
					key={i}
					id={p.id}
					profileURL={`${config.images.secure_base_url}${config.images.still_sizes[2]}${p.profile_path}`}
					popularity={p.popularity}
					name={p.name}
					description={utils.titles(p, i)}
				/>
			);
		});

		return(
			<div className="display">

				<div className="display__header">
					<div className="display__header__title">
						<h2>Popular People</h2>
					</div>
					<div className="display__header__links"></div>
				</div>

				<div className="display__container--people">
					{p}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	people: state.films.people,
	config: state.films.config
});

export default connect(mapStateToProps, {
	fetchPopularPerson
})(Display);