import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class InfoPage extends React.Component {
	
	render() {
		let styles = StyleSheet.create({
			container:{
				flex:1,
				alignItems:"center",
				justifyContent:"center",
				backgroundColor:this.props.backgroundColor
			},
			text: {
				color:this.props.textcolor,
				fontSize:24
			}
		})
		return(
			<View style={styles.container}>
				<Text style={styles.text}>{this.props.firstname} {this.props.lastname}</Text>
			</View>	
		)
	}
}
