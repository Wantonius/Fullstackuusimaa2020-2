import React from 'react';
import StateManager from './context/StateManager';
import {FlatList,View,Pressable,Text,StyleSheet} from 'react-native'

class ShoppingList extends React.Component {
	
	changeToEditMode = (item) => {
		this.props.changeToEditMode(item);
		this.props.navigation.navigate("Add Item");
	}

	render() {
		const styles = StyleSheet.create({
			rowStyle:{
				flexDirection:"row"
			},
			removeButton:{
				width:80,
				height:50,
				backgroundColor:"#225522",
				justifyContent:"center",
				alignItems:"center",
				marginRight:15
			},
			editButton:{
				width:80,
				height:50,
				backgroundColor:"#AA55AA",
				justifyContent:"center",
				alignItems:"center"
			},
			textStyle:{
				fontSize:18,
				fontFamily:"sans-serif",
				fontWeight:"bold",
				paddingLeft:10,
				paddingRight:10
			}
		})
	return(
		<View>
			<View style={styles.rowStyle}>
				<Pressable onPress={() => this.props.logout()} 
							style={styles.removeButton}>
					<Text style={styles.textStyle}>Logout</Text>
				</Pressable>
				<Pressable onPress={() => {
					this.props.navigation.navigate("Add Item") 
					this.props.cancel();
					}}
					style={styles.editButton}>
					<Text style={styles.textStyle}>Add Item</Text>
				</Pressable>			
			</View>
			<FlatList data={this.props.list}
					renderItem={
						({item,index}) => {
							return(
								<View style={styles.rowStyle}>
									<Text style={styles.textStyle}>
										{item.count}
									</Text>
									<Text style={styles.textStyle}>
										{item.type}
									</Text>
									<Text style={styles.textStyle}>
										{item.price}
									</Text>
									<Pressable onPress={() => this.props.removeFromList(item.id)} 
									style={styles.removeButton}>
										<Text style={styles.textStyle}>Remove</Text>
									</Pressable>
									<Pressable onPress={() => this.changeToEditMode(item)} style={styles.editButton}>
										<Text style={styles.textStyle}>Edit</Text>
									</Pressable>	
								</View>
							)
						}
					}
					keyExtractor={item => ""+item.id}/>
		</View>
	)
	}
}

export default StateManager(ShoppingList);