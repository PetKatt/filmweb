import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { fetchConfiguration } from "../../store/actions/fetchActions";


class Layout extends Component {
	componentWillMount() {
		this.props.fetchConfiguration();
	}

	render() {
		// console.log("CONFIG ", this.props.config);
		// console.log("FILMS from Layout.js ", this.props.films);

		return (
			<Router>
				<React.Fragment>
					{this.props.children}
				</React.Fragment>
			</Router>
		);
	}
}

export default connect(null, { fetchConfiguration })(Layout);