import React from 'react';
import StateContext from './StateContext';

export default class StateProvider extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isLogged:false,
			token:"",
			error:"",
			loading:false,
			list:[]
		}
	}
	
	componentDidMount() {
		if(this.state.isLogged) {
			this.getShoppingList();
		}
	}
	
	setLoading = (loading) => {
		this.setState({
			loading:loading,
			error:""
		})
	}
	
	setError = (error) => {
		this.setState({
			loading:false,
			error:error
		})
	}
	
	login = (user) => {
		let request = {
			method:"POST",
			mode:"cors",
			headers:{"Content-type":"application/json"},
			body:JSON.stringify(user)
		}
		this.setLoading(true);
		fetch("http://uusimaa-backend.herokuapp.com/login",request).then(response => {
			if(response.ok) {
				response.json().then(data => {
					this.setState({
						error:"",
						loading:false,
						token:data.token,
						isLogged:true
					},() => {
						this.getShoppingList()
					})
				}).catch(error => {
					this.setError("Failed to parse server response. Try again!");
				})
			} else {
				let error = "Failed to log in. Server responded with status:"+response.status
				this.setError(error);
			}
		}).catch(error => {
			this.setError(error);
		})		
	}
	
	register = (user) => {
		let request = {
			method:"POST",
			mode:"cors",
			headers:{"Content-type":"application/json"},
			body:JSON.stringify(user)
		}
		this.setLoading(true);
		fetch("http://uusimaa-backend.herokuapp.com/register",request).then(response => {
			if(!response.ok) {
				let error = "Register failed. Is username already in use? Server responded with status:"+response.status
				this.setError(error);
			} else {
				this.setLoading(false);
			}
		}).catch(error => {
			this.setError(error);
		})
	}
	
	logout = () => {
		let request = {
			method:"POST",
			mode:"cors",
			headers:{"Content-type":"application/json",
					"token":this.state.token}
		}
		this.setLoading(true);
		fetch("http://uusimaa-backend.herokuapp.com/logout",request).then(response => {
			this.setState({
				list:[],
				error:"",
				loading:false,
				isLogged:false,
				token:""
			})
		}).catch(error => {
			this.setError(error);
		})		
	}
	
	getShoppingList = () => {
		let request = {
			method:"GET",
			mode:"cors",
			headers:{"Content-type":"application/json",
					 "token":this.state.token}
		}
		this.setLoading(true);
		fetch("http://uusimaa-backend.herokuapp.com/api/shopping",request).then(response => {
			if(response.ok) {
				response.json().then(data => {
					this.setState({
						error:"",
						loading:false,
						list:data
					})
				}).catch(error => {
					this.setError("Failed to parse server response. Try again!");
				})
			} else {
				let error = "Failed to load resources. Server responded with status:"+response.status
				this.setError(error);
			}
		}).catch(error => {
			this.setError(error);
		})			
	}
	
	addToList = (item) => {
		
	}
	
	removeFromList = (id) => {
		
	}
	
	editItem = (item) => {
		
	}
	
	render() {
		return(
			<StateContext.Provider value={{
				isLogged:this.state.isLogged,
				token:this.state.token,
				error:this.state.error,
				loading:this.state.loading,
				list:this.state.list,
				addToList:this.addToList,
				removeFromList:this.removeFromList,
				editItem:this.editItem,
				login:this.login,
				register:this.register,
				logout:this.logout
			}}>
			{this.props.children}
			</StateContext.Provider>
		)
	}
}