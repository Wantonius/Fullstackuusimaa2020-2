import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ColorForm from './ColorForm';
import ColorList from './ColorList';

const Stack = createStackNavigator();

export default class App extends React.Component {
  
	constructor(props) {
		super(props);
		this.state = {
			list:[],
			id:100
		}
	}
	
	addToList = (item) => {
		item.id = this.state.id;
		this.setState((state) => {
			return {
				list:state.list.concat(item),
				id:state.id+1
			}
		})
	}
	
	removeFromList = (id) => {
		this.setState((state) => {
			let tempList = state.list.filter(item => item.id !== id);
			return {
				list:tempList
			}
		})
	}
  
	render() {
		  return (
		  <NavigationContainer>
			  <Stack.Navigator>
			  	<Stack.Screen name="ColorList">
				{props => <ColorList {...props} removeFromList={this.removeFromList} list={this.state.list}/>}
				</Stack.Screen>
				<Stack.Screen name="ColorForm">
				{props => <ColorForm {...props} addToList={this.addToList}/>}
				</Stack.Screen>				
			  </Stack.Navigator>
		  </NavigationContainer>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
