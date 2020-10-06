import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingForm from './components/ShoppingForm';
import ShoppingList from './components/ShoppingList';

class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			list:[],
			id:500
		}
	}
	
	addToList = (item) => {
		item.id = this.state.id;
		let tempList = this.state.list.concat(item);
		this.setState((state) =>{
		return {
			list:tempList,
			id:state.id+1
		}
		})
	}
	
	removeFromList = (id) => {
		let tempList = this.state.list.filter(item => item.id !== id);
		this.setState({
			list:tempList
		})
	}
	
	render() {
		return (
			<div className="App">
				<ShoppingForm addToList={this.addToList}/>
				<hr/>
				<ShoppingList list={this.state.list} removeFromList={this.removeFromList}/>
			</div>
	    );
	}
}

export default App;
