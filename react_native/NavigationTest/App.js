import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import InfoForm from './InfoForm';
import InfoPage from './InfoPage';

const Stack = createStackNavigator();

export default class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			firstname:"",
			lastname:"",
			textcolor:"red",
			backgroundColor:"blue"
		}
	}
	
	setMessage = (data) => {
		this.setState({
			firstname:data.firstname,
			lastname:data.lastname,
			textcolor:data.textcolor,
			backgroundColor:data.backgroundColor
		})
	}
	
	render() {
	  return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="InfoForm">
				{props => <InfoForm {...props} setMessage={this.setMessage}/>}
				</Stack.Screen>
				<Stack.Screen name="InfoPage">
				{props => <InfoPage {...props} {...this.state}/>}
				</Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>

	  );
	}
}


