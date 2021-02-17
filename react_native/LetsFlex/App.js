import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			message:"Buttons"
		}
	}
	
	changeMessage = (id) => {
		this.setState({
			message:"You pressed button "+id
		})
	}
	
	render() {
	  return (
	  <View style={styles.mainWindow}>
	    <View style={styles.textWindow}>
			<Text>{this.state.message}</Text>
		</View>
		<View style={styles.container}>
			<View style={styles.rowContainer}>
				<TouchableHighlight onPress={() => this.changeMessage(1)}
				style={styles.blueView}>
					<Text>1</Text>
				</TouchableHighlight>
				<TouchableHighlight onPress={() => this.changeMessage(2)}style={styles.blueView}>
					<Text>2</Text>
				</TouchableHighlight>
				<TouchableHighlight onPress={() => this.changeMessage(3)}style={styles.blueView}>
					<Text>3</Text>
				</TouchableHighlight>
				<TouchableHighlight onPress={() => this.changeMessage(4)}style={styles.blueView}>
					<Text>4</Text>
				</TouchableHighlight>
			</View>
			<View style={styles.rowContainer}>
				<TouchableHighlight onPress={() => this.changeMessage(5)}style={styles.blueView}>
					<Text>5</Text>
				</TouchableHighlight>
				<TouchableHighlight onPress={() => this.changeMessage(6)}style={styles.blueView}>
					<Text>6</Text>
				</TouchableHighlight>
				<TouchableHighlight onPress={() => this.changeMessage(7)}style={styles.blueView}>
					<Text>7</Text>
				</TouchableHighlight>
				<TouchableHighlight onPress={() => this.changeMessage(8)}style={styles.blueView}>
					<Text>8</Text>
				</TouchableHighlight>
			</View>
		</View>
	</View>
	  );
	}
}

const styles = StyleSheet.create({
  mainWindow: {
	  flex:1,
  },
  textWindow: {
	  flex:1,
	  justifyContent:"center",
	  alignItems:"center"
  },
  container: {
    flex: 10,
    backgroundColor: '#fff',
	flexDirection:'row'
  },
  rowContainer: {
	  flex:1,
	  alignItems:"center",
	  justifyContent:"space-around"
  },
  blueView: {
	  backgroundColor:'blue',
	  alignItems:"center",
	  justifyContent:"center",
	  width:50,
	  height:50,
  }
});
