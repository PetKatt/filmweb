import React, { Component } from "react";

class SignUp extends Component {
	constructor(props) {
		super(props);

		this.inputName = React.createRef();
		this.inputSurname = React.createRef();
		this.inputEmail = React.createRef();
		this.inputPassword = React.createRef();
	}

	handleSubmit = (event) => {
		event.preventDefault();
		alert(`Form has been submited! 
			Name: ${this.inputName.current.value}
			Surname: ${this.inputSurname.current.value}
			Email: ${this.inputEmail.current.value}
			Password: ${this.inputPassword.current.value}`);
	}

	render() {
		return (
			<div className="form-container">
				<form className="form" onSubmit={this.handleSubmit}>
					<label for="name">Name</label>
					<input id="name" type="text" ref={this.inputName} placeholder="Name" />
					

					<label for="surname">Surname</label>
					<input id="surname" type="text" ref={this.inputSurname} placeholder="Surname" />
					

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

export default SignUp;