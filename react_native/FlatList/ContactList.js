import {View,FlatList,Pressable,StyleSheet,Text} from 'react-native';
import React from 'react';

export default class ContactList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data:[
				{
					"firstname": "Hayden",
					"lastname": "Cabrera",
					"id": 1
				},
				{
					"firstname": "Kasper",
					"lastname": "Dorsey",
					"id": 2
				},
				{
					"firstname": "Desirae",
					"lastname": "Durham",
					"id": 3
				},
				{
					"firstname": "Luke",
					"lastname": "England",
					"id": 4
				},
				{
					"firstname": "Lavinia",
					"lastname": "Cantu",
					"id": 5
				},
				{
					"firstname": "Mufutau",
					"lastname": "Thomas",
					"id": 6
				},
				{
					"firstname": "Cassandra",
					"lastname": "Hull",
					"id": 7
				},
				{
					"firstname": "Simon",
					"lastname": "Russell",
					"id": 8
				},
				{
					"firstname": "Lyle",
					"lastname": "Shepard",
					"id": 9
				},
				{
					"firstname": "Beatrice",
					"lastname": "Golden",
					"id": 10
				},
				{
					"firstname": "Rhona",
					"lastname": "Chen",
					"id": 11
				},
				{
					"firstname": "Hyacinth",
					"lastname": "Ayala",
					"id": 12
				},
				{
					"firstname": "Jonah",
					"lastname": "Slater",
					"id": 13
				},
				{
					"firstname": "Griffin",
					"lastname": "Koch",
					"id": 14
				},
				{
					"firstname": "Brian",
					"lastname": "Franklin",
					"id": 15
				},
				{
					"firstname": "Bernard",
					"lastname": "Lynch",
					"id": 16
				},
				{
					"firstname": "Yen",
					"lastname": "Rice",
					"id": 17
				},
				{
					"firstname": "Nicole",
					"lastname": "King",
					"id": 18
				},
				{
					"firstname": "Audra",
					"lastname": "Burch",
					"id": 19
				},
				{
					"firstname": "Rebecca",
					"lastname": "Tyson",
					"id": 20
				},
				{
					"firstname": "Fredericka",
					"lastname": "Bowers",
					"id": 21
				},
				{
					"firstname": "Lucius",
					"lastname": "Gillespie",
					"id": 22
				},
				{
					"firstname": "Kendall",
					"lastname": "Macdonald",
					"id": 23
				},
				{
					"firstname": "Patience",
					"lastname": "Potts",
					"id": 24
				},
				{
					"firstname": "Cadman",
					"lastname": "Wolfe",
					"id": 25
				},
				{
					"firstname": "Abraham",
					"lastname": "Cline",
					"id": 26
				},
				{
					"firstname": "Marny",
					"lastname": "Bray",
					"id": 27
				},
				{
					"firstname": "Burke",
					"lastname": "Ramirez",
					"id": 28
				},
				{
					"firstname": "Basia",
					"lastname": "Vance",
					"id": 29
				},
				{
					"firstname": "Stephanie",
					"lastname": "Finley",
					"id": 30
				},
				{
					"firstname": "Sarah",
					"lastname": "Sherman",
					"id": 31
				},
				{
					"firstname": "Neville",
					"lastname": "Snyder",
					"id": 32
				},
				{
					"firstname": "Grace",
					"lastname": "Guzman",
					"id": 33
				},
				{
					"firstname": "Chastity",
					"lastname": "Carrillo",
					"id": 34
				},
				{
					"firstname": "Maxwell",
					"lastname": "Crosby",
					"id": 35
				},
				{
					"firstname": "Amena",
					"lastname": "Flynn",
					"id": 36
				},
				{
					"firstname": "Michelle",
					"lastname": "Ramos",
					"id": 37
				},
				{
					"firstname": "Alden",
					"lastname": "Shannon",
					"id": 38
				},
				{
					"firstname": "Barry",
					"lastname": "Rivers",
					"id": 39
				},
				{
					"firstname": "Laurel",
					"lastname": "Lewis",
					"id": 40
				},
				{
					"firstname": "Stacey",
					"lastname": "Whitaker",
					"id": 41
				},
				{
					"firstname": "Chaim",
					"lastname": "Solomon",
					"id": 42
				},
				{
					"firstname": "Guy",
					"lastname": "Walter",
					"id": 43
				},
				{
					"firstname": "Ivana",
					"lastname": "Beasley",
					"id": 44
				},
				{
					"firstname": "Shannon",
					"lastname": "Noel",
					"id": 45
				},
				{
					"firstname": "Maite",
					"lastname": "Park",
					"id": 46
				},
				{
					"firstname": "Leandra",
					"lastname": "Ball",
					"id": 47
				},
				{
					"firstname": "Deacon",
					"lastname": "Armstrong",
					"id": 48
				},
				{
					"firstname": "Phoebe",
					"lastname": "Cash",
					"id": 49
				},
				{
					"firstname": "Anika",
					"lastname": "Hicks",
					"id": 50
				},
				{
					"firstname": "Oscar",
					"lastname": "Mcfadden",
					"id": 51
				},
				{
					"firstname": "Penelope",
					"lastname": "Rojas",
					"id": 52
				},
				{
					"firstname": "Cyrus",
					"lastname": "Lowe",
					"id": 53
				},
				{
					"firstname": "Owen",
					"lastname": "Carter",
					"id": 54
				},
				{
					"firstname": "Nita",
					"lastname": "York",
					"id": 55
				},
				{
					"firstname": "Barry",
					"lastname": "Gross",
					"id": 56
				},
				{
					"firstname": "Hedwig",
					"lastname": "Price",
					"id": 57
				},
				{
					"firstname": "Hyatt",
					"lastname": "Park",
					"id": 58
				},
				{
					"firstname": "Lance",
					"lastname": "Miles",
					"id": 59
				},
				{
					"firstname": "Erasmus",
					"lastname": "Morrison",
					"id": 60
				},
				{
					"firstname": "Indira",
					"lastname": "Mercer",
					"id": 61
				},
				{
					"firstname": "Hedley",
					"lastname": "Vega",
					"id": 62
				},
				{
					"firstname": "Moana",
					"lastname": "Holt",
					"id": 63
				},
				{
					"firstname": "Oleg",
					"lastname": "Nichols",
					"id": 64
				},
				{
					"firstname": "Daria",
					"lastname": "Goodwin",
					"id": 65
				},
				{
					"firstname": "Michelle",
					"lastname": "Burnett",
					"id": 66
				},
				{
					"firstname": "Nathaniel",
					"lastname": "Rowland",
					"id": 67
				},
				{
					"firstname": "Garrett",
					"lastname": "Hobbs",
					"id": 68
				},
				{
					"firstname": "Stewart",
					"lastname": "Foster",
					"id": 69
				},
				{
					"firstname": "Deanna",
					"lastname": "Mckay",
					"id": 70
				},
				{
					"firstname": "Henry",
					"lastname": "Rivas",
					"id": 71
				},
				{
					"firstname": "Linus",
					"lastname": "Huff",
					"id": 72
				},
				{
					"firstname": "Hiroko",
					"lastname": "Barr",
					"id": 73
				},
				{
					"firstname": "Barry",
					"lastname": "Forbes",
					"id": 74
				},
				{
					"firstname": "Ariana",
					"lastname": "Williams",
					"id": 75
				},
				{
					"firstname": "Chiquita",
					"lastname": "Hoover",
					"id": 76
				},
				{
					"firstname": "Sebastian",
					"lastname": "Vaughan",
					"id": 77
				},
				{
					"firstname": "Rogan",
					"lastname": "Navarro",
					"id": 78
				},
				{
					"firstname": "Carson",
					"lastname": "Joseph",
					"id": 79
				},
				{
					"firstname": "Uriel",
					"lastname": "Delacruz",
					"id": 80
				},
				{
					"firstname": "Malik",
					"lastname": "Hutchinson",
					"id": 81
				},
				{
					"firstname": "Moana",
					"lastname": "Sargent",
					"id": 82
				},
				{
					"firstname": "Quintessa",
					"lastname": "Mccormick",
					"id": 83
				},
				{
					"firstname": "Chava",
					"lastname": "Thomas",
					"id": 84
				},
				{
					"firstname": "Ginger",
					"lastname": "Campbell",
					"id": 85
				},
				{
					"firstname": "Cathleen",
					"lastname": "Dominguez",
					"id": 86
				},
				{
					"firstname": "Burke",
					"lastname": "Navarro",
					"id": 87
				},
				{
					"firstname": "Orson",
					"lastname": "Burt",
					"id": 88
				},
				{
					"firstname": "Teegan",
					"lastname": "Warner",
					"id": 89
				},
				{
					"firstname": "Driscoll",
					"lastname": "Richmond",
					"id": 90
				},
				{
					"firstname": "Quon",
					"lastname": "Baldwin",
					"id": 91
				},
				{
					"firstname": "Dakota",
					"lastname": "Workman",
					"id": 92
				},
				{
					"firstname": "Amery",
					"lastname": "Price",
					"id": 93
				},
				{
					"firstname": "Rooney",
					"lastname": "Fowler",
					"id": 94
				},
				{
					"firstname": "Nash",
					"lastname": "Mclean",
					"id": 95
				},
				{
					"firstname": "Scarlett",
					"lastname": "Logan",
					"id": 96
				},
				{
					"firstname": "Chaney",
					"lastname": "Whitney",
					"id": 97
				},
				{
					"firstname": "Violet",
					"lastname": "Collier",
					"id": 98
				},
				{
					"firstname": "Hayes",
					"lastname": "Mendez",
					"id": 99
				},
				{
					"firstname": "Quinlan",
					"lastname": "Wolf",
					"id": 100
				}
				]
		}
	}
	
	removeFromList = (id) => {
		this.setState((state) => {
			let tempList = state.data.filter(item => item.id !== id);
			return {
				data:tempList
			}
		})
	}
	
	render() {
		return( 
			<View>
				<FlatList data={this.state.data}
					renderItem={
						({item}) => {
							return(
								<View style={styles.rowStyle}>
									<Text style={styles.textStyle}>
										{item.firstname} {item.lastname}
									</Text>							
									<Pressable style={styles.buttonStyle}
										onPress={() =>{this.removeFromList(item.id)} }>
										<Text>Remove</Text>
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

const styles = StyleSheet.create({
	rowStyle:{
		flexDirection:"row",
		height:60,
		alignItems:"center"
	},
	textStyle:{
		fontFamily:"sans-serif",
		fontSize:18,
		fontWeight:"bold"
	},
	buttonStyle:{
		width:80,
		height:50,
		borderRadius:5,
		backgroundColor:"red",
		justifyContent:"center",
		alignItems:"center",
		alignSelf:"flex-end"
	}
})