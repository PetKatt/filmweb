import React, { Component } from "react";

class Login extends Component {
	constructor(props) {
		super(props);

		this.inputEmail = React.createRef();
		this.inputPassword = React.createRef();
	}
	
	handleSubmit = (event) => {
		event.preventDefault();
		alert(`You have loged in! 
			Email: ${this.inputEmail.current.value}
			Password: ${this.inputPassword.current.value}`);
	}

	render() {
		return (
			<div className="form-container">
				<form className="form" onSubmit={this.handleSubmit}>
					
					<label for="email">Email</label>
					<input id="email" type="text" ref={this.inputEmail} placeholder="Email" />
					
					<label for="password">Password</label>
					<input id="password" type="text" ref={this.inputPassword} placeholder="Password" />
					

					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default Login;