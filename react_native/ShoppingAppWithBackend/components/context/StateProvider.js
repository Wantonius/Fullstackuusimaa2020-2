import React from 'react';
import StateContext from './StateContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class StateProvider extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isLogged:false,
			token:"",
			error:"",
			loading:false,
			list:[],
			mode:"Add",
			item:{}
		}
	}

	loadStorage = async () => {
		try {
			let value = await AsyncStorage.getItem('@state');
			if(value !== null) {
				let state = JSON.parse(value)
				this.setState(state);
			}
		} catch (e) {
			console.log("Failed to load storage");
		}
	}
	
	saveStorage = async () => {
		try {
			await AsyncStorage.setItem('@state',JSON.stringify(this.state));
		} catch (e) {
			console.log("Failed to save storage");
		}		
	}
	
	componentDidMount() {
		this.loadStorage();
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
						this.getShoppingList();
						this.saveStorage();
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
			}, () => {
				this.saveStorage();
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
					}, () => {
						this.saveStorage();
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
		if(item.id) {
			let request = {
				method:"PUT",
				mode:"cors",
				headers:{"Content-type":"application/json",
						"token":this.state.token},
				body:JSON.stringify(item)
			}
			this.setLoading(true);
			fetch("http://uusimaa-backend.herokuapp.com/api/shopping/"+item.id,request).then(response => {
				if(response.ok) {
					this.getShoppingList();
				} else {
					let error = "Failed to edit item. Server responded with a status:"+response.status
					this.setError(error);
				}
			}).catch(error => {
				this.setError(error);
			})			
		} else {
			let request = {
				method:"POST",
				mode:"cors",
				headers:{"Content-type":"application/json",
						"token":this.state.token},
				body:JSON.stringify(item)
			}
			this.setLoading(true);
			fetch("http://uusimaa-backend.herokuapp.com/api/shopping",request).then(response => {
				if(response.ok) {
					this.getShoppingList();
				} else {
					let error = "Failed to add new item. Server responded with a status:"+response.status
					this.setError(error);
				}
			}).catch(error => {
				this.setError(error);
			})
		}		
	}
	
	removeFromList = (id) => {
		let request = {
			method:"DELETE",
			mode:"cors",
			headers:{"Content-type":"application/json",
					"token":this.state.token}
		}
		this.setLoading(true);
		fetch("http://uusimaa-backend.herokuapp.com/api/shopping/"+id,request).then(response => {
			if(response.ok) {
				this.getShoppingList();
			} else {
				let error = "Failed to delete item. Server responded with a status:"+response.status
				this.setError(error);
			}
		}).catch(error => {
			this.setError(error);
		})		
	}
	
	changeToEditMode = (item) => {
		this.setState({
			mode:"Edit",
			item:item
		})
	}
	
	cancel = () => {
		this.setState({
			mode:"Add",
			item:{}
		})
	}
	
	render() {
		return(
			<StateContext.Provider value={{
				isLogged:this.state.isLogged,
				token:this.state.token,
				error:this.state.error,
				loading:this.state.loading,
				list:this.state.list,
				mode:this.state.mode,
				item:this.state.item,
				addToList:this.addToList,
				removeFromList:this.removeFromList,
				editItem:this.editItem,
				login:this.login,
				register:this.register,
				logout:this.logout,
				changeToEditMode:this.changeToEditMode,
				cancel:this.cancel
			}}>
			{this.props.children}
			</StateContext.Provider>
		)
	}
}