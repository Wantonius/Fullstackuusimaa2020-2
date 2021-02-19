import React from 'react';
import StateManager from './context/StateManager';
import {View,Pressable,TextInput,Text,StyleSheet} from 'react-native';

class LoginPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			username:"",
			password:""
		}
	}
	
	register = () => {
		let user = {
			username:this.state.username,
			password:this.state.password
		}
		this.props.register(user);
	}
	
	login = () => {
		let user = {
			username:this.state.username,
			password:this.state.password
		}
		this.props.login(user);
	}	
	
	render() {
		const styles = StyleSheet.create({
			formGroup:{
				flexDirection:"row"
			},
			registerButton:{
				width:80,
				height:50,
				borderRadius:5,
				backgroundColor:"#339944",
				alignItems:"center",
				justifyContent:"center",
				marginLeft:10
			},
			loginButton:{
				width:80,
				height:50,
				borderRadius:5,
				backgroundColor:"#AA22FF",
				alignItems:"center",
				justifyContent:"center",
				marginLeft:10
			},
			textStyle:{
				fontFamily:"sans-serif",
				fontSize:18,
				fontWeight:"bold"
			}
		});
		return(
			<View>
				<View style={styles.formGroup}>
					<Text style={styles.textStyle}>Username:</Text>
					<TextInput onChangeText={(text) => 
								this.setState({username:text})} 
								value={this.state.username} 
								placeholder="username"/>
				</View>
				<View style={styles.formGroup}>
					<Text style={styles.textStyle}>Password:</Text>
					<TextInput onChangeText={(text) => 
								this.setState({password:text})} 
								value={this.state.password}
								secureTextEntry={true}
								placeholder="password"/>
				</View>
				<View style={styles.formGroup}>
					<Pressable onPress={() => this.register()} 
						style={styles.registerButton}>
						<Text style={styles.textStyle}>Register</Text>
					</Pressable>
					<Pressable onPress={() => this.login()} 
						style={styles.loginButton}>
						<Text style={styles.textStyle}>Login</Text>
					</Pressable>
				</View>
			</View>
		)
	}
}

export default StateManager(LoginPage);