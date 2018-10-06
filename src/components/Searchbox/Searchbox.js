import React, { Component } from "react";


class Searchbox extends Component {

	constructor(props) {
		super(props);
		this.state = {
			value: ""
		};
		this.searchRef = React.createRef();
	}

	componentDidMount() {
		this.searchRef.current.focus();
	}

	handleChange = (e) => {
		this.setState({ value: e.target.value });
	}

	handleSubmit = (e) => {
		alert("Form has been submitted: " + this.state.value);
		e.preventDefault();
	} 

	render() {
		return (
			<div className="searchbox">
				<form onSubmit={this.handleSubmit}>
					<label><div><i className="fas fa-search"></i>Search</div>
						<input type="text" name="search" placeholder="Search..." onChange={this.handleChange} value={this.state.value} ref={this.searchRef} />
					</label>

					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default Searchbox;