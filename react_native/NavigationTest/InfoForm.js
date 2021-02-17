import React from 'react';
import {View,TouchableHighlight,Text,TextInput,StyleSheet} from 'react-native';

export default class InfoForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			firstname:"",
			lastname:"",
			textcolor:"",
			backgroundColor:""
		}
	}
	
	setMessage = () => {
		let data = {
			firstname:this.state.firstname,
			lastname:this.state.lastname,
			textcolor:this.state.textcolor,
			backgroundColor:this.state.backgroundColor
		}
		this.props.setMessage(data);
		this.setState({
			firstname:"",
			lastname:"",
			textcolor:"",
			backgroundColor:""		
		})
		this.props.navigation.navigate("InfoPage");
	}
	
	render() {
		return(
			<View style={styles.container}>
				<View style={styles.row}>
					<Text>First Name:</Text>
					<TextInput onChangeText={
						(text) => this.setState({
							firstname:text
						})						
					} value={this.state.firstname} placeholder="first name"/>
				</View>
				<View style={styles.row}>
					<Text>Last Name:</Text>
					<TextInput onChangeText={
						(text) => this.setState({
							lastname:text
						})						
					} value={this.state.lastname} placeholder="last name"/>
				</View>
				<View style={styles.row}>
					<Text>Text Color:</Text>
					<TextInput onChangeText={
						(text) => this.setState({
							textcolor:text
						})						
					} value={this.state.textcolor} placeholder="text color"/>
				</View>
				<View style={styles.row}>
					<Text>Background Color:</Text>
					<TextInput onChangeText={
						(text) => this.setState({
							backgroundColor:text
						})						
					} value={this.state.backgroundColor} placeholder="background color"/>
				</View>
				<View style={styles.buttonRow}>
					<TouchableHighlight style={styles.button}
						onPress={() => this.setMessage()}>
						<Text>Set Message</Text>
					</TouchableHighlight>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems:"center",
		justifyContent:"center"
	},
	row: {
		flex:1,
		flexDirection:"row",
		alignItems:"center",
		justifyContent:"center"
	},
	buttonRow:{
		flex:1,
		flexDirection:"row",
		alignItems:"center",
		justifyContent:"center"
	},
	button: {
		height:80,
		width:110,
		backgroundColor:"green",
		alignItems:"center",
		justifyContent:"center"		
	}
});