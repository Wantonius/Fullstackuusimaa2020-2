const express = require("express");

let router = express.Router();

let database = [];
let id = 500;

router.get("/shopping",function(req,res) {
	return res.status(200).json(database);
})

router.post("/shopping",function(req,res) {
	let item = {
		id:id,
		type:req.body.type,
		count:req.body.count,
		price:req.body.price
	}
	id++;
	database.push(item);
	return res.status(200).json({message:"success"});
})

router.delete("/shopping/:id",function(req,res) {
	let tempId = parseInt(req.params.id,10);
	let tempList = database.filter(item => item.id !== tempId);
	database = tempList;
	return res.status(200).json({message:"succees"})
})

router.put("/shopping/:id",function(req,res) {
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

module.exports = router;