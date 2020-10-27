import React from 'react';
import StateContext from './StateContext';

export default class StateProvider extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			list:[],
			id:100
		}
	}
	
	addToList = (contact) => {
		contact.id = this.state.id;
		let tempList = this.state.list.concat(contact);
		this.setState(state =>{ 
		return {
			id:state.id+1,
			list:tempList
		}
		})
	}
	
	removeFromList = (id) => {
		let tempId = parseInt(id,10);
		let tempList = this.state.list.filter(contact => contact.id !== tempId);
		this.setState({
			list:tempList
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