import React from 'react';
import {FlatList,View,Pressable,Text,StyleSheet} from 'react-native';

export default class ColorList extends React.Component {

	render() {
		let styles = StyleSheet.create({
			container:{
				flex:1
			},
			textStyle:{
				marginLeft:15,
				fontSize:18,
				fontFamily:"sans-serif",
				fontWeight:"bold"
			},
			buttonStyle:{
				width:80,
				height:50,
				borderRadius:5,
				marginRight:15,
				backgroundColor:"#FFF",
				alignItems:"center",
				justifyContent:"center"
			},
			addButtonStyle:{
				width:100,
				height:50,
				borderRadius:5,
				marginRight:15,
				backgroundColor:"#88EE33",
				alignItems:"center",
				justifyContent:"center",
				alignSelf:"center"
			},
			leftBox:{
				flex:1,
				alignItems:"flex-start",
				justifyContent:"center"
			},
			rightBox:{
				flex:1,
				alignItems:"flex-end"
			}
		})
		return(
			<View style={styles.container}>
				<Pressable style={styles.addButtonStyle} 
					onPress={() => this.props.navigation.navigate("ColorForm")}>
					<Text>Add new color</Text>
				</Pressable>
				<FlatList data={this.props.list}
				renderItem={({item,index}) => {
					return(
							<View style={{flexDirection:"row",backgroundColor:item.color}}>
								<View style={styles.leftBox}>
									<Text style={styles.textStyle}>{item.type}</Text>
								</View>
								<View style={styles.rightBox}>
									<Pressable style={styles.buttonStyle}
									onPress={() => this.props.removeFromList(item.id)}>
										<Text>Remove</Text>
									</Pressable>
								</View>
							</View>
						)
				}}
				keyExtractor={item => ""+item.id}/>
			</View>
		)
	}
}

