import {Component} from '@angular/core';

@Component({
	selector:"personlist",
	templateUrl:"./personlist.component.html"
})
export class PersonList {
	list = [
	{
		"firstname": "Theodore",
		"lastname": "Sweet"
	},
	{
		"firstname": "Kellie",
		"lastname": "Larsen"
	},
	{
		"firstname": "Brenda",
		"lastname": "Lindsey"
	},
	{
		"firstname": "Thaddeus",
		"lastname": "Blackwell"
	},
	{
		"firstname": "Asher",
		"lastname": "Daniel"
	},
	{
		"firstname": "Leilani",
		"lastname": "Goff"
	},
	{
		"firstname": "Amir",
		"lastname": "Townsend"
	},
	{
		"firstname": "Kalia",
		"lastname": "Greer"
	},
	{
		"firstname": "Vielka",
		"lastname": "Shaffer"
	},
	{
		"firstname": "Nissim",
		"lastname": "Frank"
	},
	{
		"firstname": "Arthur",
		"lastname": "Gordon"
	},
	{
		"firstname": "Clementine",
		"lastname": "Cooke"
	},
	{
		"firstname": "Chastity",
		"lastname": "Mcmillan"
	},
	{
		"firstname": "Carla",
		"lastname": "Hoover"
	},
	{
		"firstname": "Avram",
		"lastname": "Kirby"
	},
	{
		"firstname": "Colt",
		"lastname": "Dejesus"
	},
	{
		"firstname": "Alisa",
		"lastname": "Melendez"
	},
	{
		"firstname": "Pascale",
		"lastname": "Bass"
	},
	{
		"firstname": "Ashton",
		"lastname": "Conway"
	},
	{
		"firstname": "Porter",
		"lastname": "Robertson"
	},
	{
		"firstname": "Hakeem",
		"lastname": "Martinez"
	},
	{
		"firstname": "Michael",
		"lastname": "Ingram"
	},
	{
		"firstname": "William",
		"lastname": "Pace"
	},
	{
		"firstname": "Brenda",
		"lastname": "Tyson"
	},
	{
		"firstname": "Nadine",
		"lastname": "Gould"
	},
	{
		"firstname": "Breanna",
		"lastname": "Sykes"
	},
	{
		"firstname": "Plato",
		"lastname": "Delgado"
	},
	{
		"firstname": "Chandler",
		"lastname": "Hayden"
	},
	{
		"firstname": "Armand",
		"lastname": "Solis"
	},
	{
		"firstname": "Ray",
		"lastname": "Richardson"
	},
	{
		"firstname": "Sydnee",
		"lastname": "Richardson"
	},
	{
		"firstname": "Germaine",
		"lastname": "Anderson"
	},
	{
		"firstname": "Astra",
		"lastname": "Gentry"
	},
	{
		"firstname": "Erasmus",
		"lastname": "Mason"
	},
	{
		"firstname": "Hayden",
		"lastname": "Alvarez"
	},
	{
		"firstname": "Axel",
		"lastname": "Turner"
	},
	{
		"firstname": "Seth",
		"lastname": "Flores"
	},
	{
		"firstname": "Aurora",
		"lastname": "Goodman"
	},
	{
		"firstname": "Hillary",
		"lastname": "Cain"
	},
	{
		"firstname": "Jarrod",
		"lastname": "Black"
	},
	{
		"firstname": "Jessica",
		"lastname": "Benjamin"
	},
	{
		"firstname": "Xyla",
		"lastname": "Holden"
	},
	{
		"firstname": "Jaden",
		"lastname": "Moon"
	},
	{
		"firstname": "Jocelyn",
		"lastname": "Cleveland"
	},
	{
		"firstname": "Noble",
		"lastname": "Foreman"
	},
	{
		"firstname": "Jennifer",
		"lastname": "Burgess"
	},
	{
		"firstname": "Wing",
		"lastname": "Richards"
	},
	{
		"firstname": "Lillith",
		"lastname": "Sexton"
	},
	{
		"firstname": "Alma",
		"lastname": "Carlson"
	},
	{
		"firstname": "Jasmine",
		"lastname": "Potts"
	},
	{
		"firstname": "Olivia",
		"lastname": "Mcintosh"
	},
	{
		"firstname": "Rhoda",
		"lastname": "Roberts"
	},
	{
		"firstname": "Desirae",
		"lastname": "Bowman"
	},
	{
		"firstname": "Priscilla",
		"lastname": "Campos"
	},
	{
		"firstname": "Leilani",
		"lastname": "Ray"
	},
	{
		"firstname": "Brendan",
		"lastname": "Espinoza"
	},
	{
		"firstname": "Rae",
		"lastname": "Woods"
	},
	{
		"firstname": "Joshua",
		"lastname": "Fisher"
	},
	{
		"firstname": "Jolene",
		"lastname": "Owens"
	},
	{
		"firstname": "Robert",
		"lastname": "Velazquez"
	},
	{
		"firstname": "Ella",
		"lastname": "Gill"
	},
	{
		"firstname": "Lee",
		"lastname": "Cantu"
	},
	{
		"firstname": "Owen",
		"lastname": "Michael"
	},
	{
		"firstname": "Quon",
		"lastname": "Sherman"
	},
	{
		"firstname": "Indigo",
		"lastname": "Potter"
	},
	{
		"firstname": "Maia",
		"lastname": "Irwin"
	},
	{
		"firstname": "Camilla",
		"lastname": "Walton"
	},
	{
		"firstname": "Ethan",
		"lastname": "Green"
	},
	{
		"firstname": "Jameson",
		"lastname": "Murphy"
	},
	{
		"firstname": "Isadora",
		"lastname": "Rogers"
	},
	{
		"firstname": "Caesar",
		"lastname": "Campos"
	},
	{
		"firstname": "Yen",
		"lastname": "Trujillo"
	},
	{
		"firstname": "Unity",
		"lastname": "Barry"
	},
	{
		"firstname": "Quin",
		"lastname": "Taylor"
	},
	{
		"firstname": "Germaine",
		"lastname": "Graham"
	},
	{
		"firstname": "Lillith",
		"lastname": "Hoffman"
	},
	{
		"firstname": "Chastity",
		"lastname": "Chavez"
	},
	{
		"firstname": "Tamekah",
		"lastname": "Owen"
	},
	{
		"firstname": "Sebastian",
		"lastname": "Peterson"
	},
	{
		"firstname": "Maya",
		"lastname": "Hoffman"
	},
	{
		"firstname": "Chancellor",
		"lastname": "Gutierrez"
	},
	{
		"firstname": "Rachel",
		"lastname": "Mosley"
	},
	{
		"firstname": "Catherine",
		"lastname": "David"
	},
	{
		"firstname": "Shad",
		"lastname": "Lancaster"
	},
	{
		"firstname": "Lilah",
		"lastname": "Salas"
	},
	{
		"firstname": "Hammett",
		"lastname": "Underwood"
	},
	{
		"firstname": "Zane",
		"lastname": "Serrano"
	},
	{
		"firstname": "Blaze",
		"lastname": "Bird"
	},
	{
		"firstname": "William",
		"lastname": "Woodward"
	},
	{
		"firstname": "Cadman",
		"lastname": "Harrison"
	},
	{
		"firstname": "Laurel",
		"lastname": "Steele"
	},
	{
		"firstname": "Angelica",
		"lastname": "Cook"
	},
	{
		"firstname": "Reese",
		"lastname": "Meadows"
	},
	{
		"firstname": "Rama",
		"lastname": "Berg"
	},
	{
		"firstname": "Wing",
		"lastname": "Nolan"
	},
	{
		"firstname": "Zane",
		"lastname": "Lowery"
	},
	{
		"firstname": "Deborah",
		"lastname": "Castaneda"
	},
	{
		"firstname": "Wyoming",
		"lastname": "Goodwin"
	},
	{
		"firstname": "Clarke",
		"lastname": "Meyer"
	},
	{
		"firstname": "Kendall",
		"lastname": "Oliver"
	}
]
}