const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logitem = require("./models/logitem");

let app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/shoppinglogger").then(
	() => console.log("Connected to mongoDB"),
	(error) => console.log("Failed to connect to mongoDB. Reason:",error)
)

/*
	severity:LOG_DEBUG,LOG_INFO,LOG_WARN,LOG_ERROR,LOG_FATAL,LOG_ALL
*/
app.get("/hoclog",function(req,res) {
	let query = {};
	if(req.query.severity) {
		query = {"severity":req.query.severity}
	}
	logitem.find(query,function(err,logitems) {
		if(err) {
			console.log("Failed to query for logs! Reason:",err)
			return res.status(500).json({message:"database failure"})
		}
		return res.status(200).json(logitems);
	})
})

app.post("/hoclog",function(req,res) {
	let now = Date.now();
	if(!req.body) {
		return res.status(422).json({message:"incomplete log"})
	}
	let templog = new logitem({
		severity:req.body.severity,
		tag:req.body.tag,
		desc:req.body.desc,
		date:now
	})
	templog.save(function(err) {
		if(err) {
			console.log("Failed to save log! Reason:",err)
			return res.status(500).json({message:"database failure"})
		}
		return res.status(200).json({message:"logged!"})
	})
})

app.listen(3002);
console.log("Running in port 3002");