const express = require("express");
const bodyParser = require("body-parser");

let app = express();

app.use(bodyParser.json());

//databases

let database = [];
let id = 500;

// REST API

app.get("/api/contact",function(req,res) {
	return res.status(200).json(database);
})

app.post("/api/contact",function(req,res) {
	let item = {
		id:id,
		firstname:req.body.firstname,
		lastname:req.body.lastname,
		email:req.body.email,
		address:req.body.address,
		city:req.body.city,
		phone:req.body.phone
	}
	id++;
	database.push(item);
	return res.status(200).json({message:"success"});
})

app.delete("/api/contact/:id",function(req,res) {
	let tempId = parseInt(req.params.id,10);
	let tempList = database.filter(item => item.id !== tempId);
	database = tempList;
	return res.status(200).json({message:"succees"})
})

app.put("/api/shopping/:id",function(req,res) {
	let tempId = parseInt(req.params.id,10);
	let newItem = {
		id:tempId,
		type:req.body.type,
		count:req.body.count,
		price:req.body.price
	}
	let tempList = database.map(item => item.id !== newItem.id ? item : newItem)
	database = tempList;
	return res.status(200).json({message:"success"})
})


let port = process.env.PORT || 3001

app.listen(port);

console.log("Running in port:"+port);