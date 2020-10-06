import React from 'react';

export default class NameForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			firstname:"",
			lastname:""
		}
	}
	
	submit = (event) => {
		event.preventDefault();
		let name = {
			firstname:this.state.firstname,
			lastname:this.state.lastname
		}
		this.props.addContact(name);
	}
	
	change = (event) => {
		let state = {};
		state[event.target.name] = event.target.value
		this.setState(state);
	}
	
	render() {
		return(
			<form onSubmit={this.submit}>
				<label htmlFor="firstname">First Name:</label>
				<input type="text"
						name="firstname"
						onChange={this.change}
						value={this.state.firstname}/>
				<br/>
				<label htmlFor="lastname">Last Name:</label>
				<input type="text"
						name="lastname"
						onChange={this.change}
						value={this.state.lastname}/>
				<br/>
				<input type="submit" value="Send message"/>
			</form>
		)
	}
}