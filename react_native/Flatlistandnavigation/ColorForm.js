import React from 'react';
import {View,Pressable,Text,TextInput,StyleSheet} from 'react-native';

export default class ColorForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			type:"",
			color:""
		}
	}
	
	createColor = () => {
		let color = "#";
		const letters = "ABCDEF0123456789"
		for(let i=0;i<6;i++) {
			let temp = Math.floor(Math.random()*16);
			color = color + letters[temp]
		}
		let item = {
			type:this.state.type,
			color:color
		}
		this.props.addToList(item);
		this.setState({
			type:"",
			color:""
		})
	}
	
	render() {
		return(
			<View style={styles.container}>
				<View style={styles.formGroup}>
					<Text>Type of color:</Text>
					<TextInput onChangeText={(text) => this.setState({
						type:text
					})} value={this.state.type} placeholder="Enter the type of color"/>
				</View>
				<Pressable style={styles.submitButton} onPress={() => this.createColor()}>
					<Text style={styles.buttonText}>Create</Text>
				</Pressable>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems:"center"
	},
	formGroup:{
		flexDirection:"row",
		marginTop:30
	},
	submitButton:{
		width:80,
		height:50,
		borderRadius:5,
		marginTop:10,
		backgroundColor:"#DD2299",
		alignItems:"center",
		justifyContent:"center"
	},
	buttonText:{
		fontFamily:"sans-serif",
		fontSize:18,
		fontWeight:"bold"
	}
})