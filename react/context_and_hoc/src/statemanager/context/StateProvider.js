import React from 'react';
import StateContext from './StateContext';

export default class StateProvider extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			list:[]
		}
	}
	
	componentDidMount() {
		this.getContacts();
	}
	
	getContacts = () => {
		let request = {
			method:"GET",
			mode:"cors",
			headers:{"Content-type":"application/json"}
		}
		fetch("/api/contact",request).then(response => {
			if(response.ok) {
				response.json().then(data => {
					this.setState({
						list:data
					})
				}).catch(error => {
					console.log("Cannot parse JSON, error:"+error);
				});
			} else {
				console.log("Server responded with status:"+response.status);
			}
		}).catch(error => {
			console.log("Server responded with an error:"+error);
		})
	}
	
	addToList = (contact) => {
		let request = {
			method:"POST",
			mode:"cors",
			headers:{"Content-type":"application/json"},
			body:JSON.stringify(contact)
		}
		fetch("/api/contact",request).then(response => {
			if(response.ok) {
				this.getContacts();
			} else {
				console.log("Server responded with a status:"+response.status);
			}
		}).catch(error => {
			console.log("Server responded with an error:"+error)
		})
	}
	
	removeFromList = (id) => {
		let request = {
			method:"DELETE",
			mode:"cors",
			headers:{"Content-type":"application/json"}
		}
		fetch("/api/contact/"+id,request).then(response => {
			if(response.ok) {
				this.getContacts();
			} else {
				console.log("Server responded with a status:"+response.status);
			}
		}).catch(error => {
			console.log("Server responded with an error:"+error);
		})
	}

	render() {
		return(
			<StateContext.Provider value={{
					list:this.state.list,
					addToList:this.addToList,
					removeFromList:this.removeFromList
			}}>
			{this.props.children}
			</StateContext.Provider>
		)
	}
}