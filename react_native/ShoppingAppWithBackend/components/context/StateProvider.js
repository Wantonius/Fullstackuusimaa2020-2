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
	
	login = (user) => {
		
	}
	
	register = (user) => {
		
	}
	
	logout = () => {
		
	}
	
	getShoppingList = () => {
		
	}
	
	addToList = (item) => {
		
	}
	
	removeFromList = (id) => {
		
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
				login:this.login,
				register:this.register,
				logout:this.logout
			}}>
			{this.props.children}
			</StateContext.Provider>
		)
	}
}