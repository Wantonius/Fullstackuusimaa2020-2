import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingForm from './components/ShoppingForm';
import ShoppingList from './components/ShoppingList';
import {Switch,Route,Redirect} from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import {connect} from 'react-redux';

class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			list:[]
		}
	}
	
	componentDidMount() {
		if(sessionStorage.getItem("state")){
			let state = JSON.parse(sessionStorage.getItem("state"));
			this.setState(state,() => {this.getList()})
		}
	}

	saveToStorage = () => {
		sessionStorage.setItem("state",JSON.stringify(this.state));
	}
	
	clearState = () => {
		this.setState({
			list:[],
			isLogged:false,
			token:""
		}, () => {
			this.saveToStorage();
		})
	}

	//LOGIN API



	

	//REST API
	
	getList = () => {
		let request = {
			method:"GET",
			mode:"cors",
			headers:{"Content-type":"application/json",
					 "token":this.props.token}
		}
		fetch("/api/shopping",request).then(response => {
			if(response.ok) {
				response.json().then(data => {
					this.setState({
						list:data
					}, () => {
						this.saveToStorage();
					})
				}).catch(error => {
					console.log("Error parsing JSON:",error);
				});
			} else {
				if(response.status === 403) {
					this.clearState();
				}
				console.log("Server responded with status:",response.status);
			}
		}).catch(error => {
			console.log("Server responded with an error:",error);
		});
	}
	
	addToList = (item) => {
		let request = {
			method:"POST",
			mode:"cors",
			headers:{"Content-type":"application/json",
					 "token":this.props.token},
			body:JSON.stringify(item)
		}
		fetch("/api/shopping",request).then(response => {
			if(response.ok) {
				this.getList();
			}
		    else {
				if(response.status === 403) {
					this.clearState();
				}
				console.log("Server responded with status:",response.status);
			}
		}).catch(error => {
			console.log("Server responded with an error:",error);
		});
	}
	
	removeFromList = (id) => {
		let request = {
			method:"DELETE",
			mode:"cors",
			headers:{"Content-type":"application/json",
					 "token":this.props.token}
		}
		fetch("/api/shopping/"+id,request).then(response => {
			if(response.ok) {
				this.getList();
			}
		    else {
				if(response.status === 403) {
					this.clearState();
				}
				console.log("Server responded with status:",response.status);
			}
		}).catch(error => {
			console.log("Server responded with an error:",error);
		});
	}
	
	editItem = (newItem) => {
		let request = {
			method:"PUT",
			mode:"cors",
			headers:{"Content-type":"application/json",
					 "token":this.props.token},
			body:JSON.stringify(newItem)
		}
		fetch("/api/shopping/"+newItem._id,request).then(response => {
			if(response.ok) {
				this.getList();
			}
		    else {
				if(response.status === 403) {
					this.clearState();
				}
				console.log("Server responded with status:",response.status);
			}
		}).catch(error => {
			console.log("Server responded with an error:",error);
		});
	}
	
	render() {
		return (
			<div className="App">
				<Navbar isLogged={this.props.isLogged} logout={this.logout}/>
				<hr/>
				<Switch>
					<Route exact path="/" render={
						() => this.props.isLogged ?
						(<Redirect to="/list"/>) 
						:
						(<LoginPage />)
					}/>
					<Route path="/list" render={
						() => this.props.isLogged ? 
						(<ShoppingList list={this.state.list} 
									removeFromList={this.removeFromList} 
									editItem={this.editItem}/>)
						:
						(<Redirect to="/"/>)
					}/>
					<Route path="/form" render={
						() => this.props.isLogged ? 
						(<ShoppingForm 
							addToList={this.addToList}/>)
						:
						(<Redirect to="/"/>)
					}/>
				</Switch>
			</div>
	    );
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return {
		token:state.token,
		isLogged:state.isLogged
	}
}

export default connect(mapStateToProps)(App);
