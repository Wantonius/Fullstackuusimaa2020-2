import React from 'react';
import StateManager from './context/StateManager';
import {View,TextInput,Text,StyleSheet,Pressable} from 'react-native';

class ShoppingForm extends React.Component {

	constructor(props) {
		super(props);
		if(props.mode === "Edit") {
			this.state = {
				type:props.item.type,
				count:props.item.count,
				price:props.item.price
			}
		} else {
			this.state = {
				type:"",
				count:0,
				price:0
			}
		}
	}
	
	addToList = () => {
		let item = {
			type:this.state.type,
			count:this.state.count,
			price:this.state.price
		}
		if(this.props.mode === "Edit") {
			item.id = this.props.item.id
			this.props.navigation.navigate("Shopping List");
		}
		this.props.addToList(item);
		this.setState({
			type:"",
			count:0,
			price:0
		})
		this.props.cancel();
	}
	
	render() {
		const styles = StyleSheet.create({
			formGroup:{
				flexDirection:"row"
			},
			addButton: {
				width:80,
				height:50,
				backgroundColor:"#775577",
				justifyContent:"center",
				alignItems:"center",
				alignSelf:"center"
			},
			textStyle:{
				fontSize:18,
				fontFamily:"sans-serif",
				fontWeight:"bold"				
			}
		})
		return(
			<View>
				<View style={styles.formGroup}>
					<Text style={styles.textStyle}>
						Type:
					</Text>
					<TextInput onChangeText={
						(text) => this.setState({
							type:text
							})
						}
						value={this.state.type}
						placeholder="Item type"/>
					
				</View>
				<View style={styles.formGroup}>
					<Text style={styles.textStyle}>
						Count:
					</Text>
					<TextInput onChangeText={
						(text) => this.setState({
							count:text
							})
						}
						value={this.state.count}
						placeholder="Number of items"
						keyboardType="numeric"/>
				</View>
				<View style={styles.formGroup}>
					<Text style={styles.textStyle}>
						Price:
					</Text>
					<TextInput onChangeText={
						(text) => this.setState({
							price:text
							})
						}
						value={this.state.price}
						placeholder="numeric"/>				
				</View>
				<Pressable style={styles.addButton}
					onPress={this.addToList}>
					<Text style={styles.textStyle}>{this.props.mode}</Text>
				</Pressable>
			</View>
		)
	}
}

export default StateManager(ShoppingForm);