import React from 'react';
import {Form,Button} from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';

class ContactForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			firstname:"",
			lastname:"",
			email:"",
			address:"",
			city:"",
			phone:""
		}
	}
	
	onChange = (event) => {
		let state = {};
		state[event.target.name] = event.target.value;
		this.setState(state);
	}
	
	onSubmit = (event) => {
		event.preventDefault();
		let contact = {
			firstname:this.state.firstname,
			lastname:this.state.lastname,
			email:this.state.email,
			address:this.state.address,
			city:this.state.city,
			phone:this.state.phone
		}
		console.log(contact);
		this.props.history.push("/");
	}
	
	render() {
		return (
			<Form onSubmit={this.onSubmit}>
				<Form.Field>
					<label htmlFor="firstname">Firstname</label>
					<input type="text"
							name="firstname"
							onChange={this.onChange}
							value={this.state.firstname}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="lastname">Lastname</label>
					<input type="text"
							name="lastname"
							onChange={this.onChange}
							value={this.state.lastname}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="email">Email</label>
					<input type="email"
							name="email"
							onChange={this.onChange}
							value={this.state.email}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="address">Address</label>
					<input type="text"
							name="address"
							onChange={this.onChange}
							value={this.state.address}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="city">City</label>
					<input type="text"
							name="city"
							onChange={this.onChange}
							value={this.state.city}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="phone">Phone</label>
					<input type="text"
							name="phone"
							onChange={this.onChange}
							value={this.state.phone}/>
				</Form.Field>
				<Button type="submit">Add</Button>
			</Form>
		)
	}
}

export default withRouter(ContactForm);