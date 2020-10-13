const express = require("express");
const bodyParser = require("body-parser");
const apiroutes = require("./routes/apiroutes");
const mongoose = require("mongoose")
const userModel = require("./models/user");
const sessionModel = require("./models/session");

let app = express();
//mongoose.connect("mongodb://localhost/databasename").then(
//mongodb://localhost/databasename
mongoose.connect("mongodb+srv://test:test@mycluster.ujjvo.mongodb.net/shoppingdatabase?retryWrites=true&w=majority").then(
	() => console.log("Success in connecting to mongodb"),
	(error) => console.log("Failed to connect to mongodb. Error:",error)
)

app.use(bodyParser.json());


//login databases


let ttl = 3600000;

//middleware

isUserLogged = (req,res,next) => {
	let token = req.headers.token;
	if(!token) {
		return res.status(403).json({message:"forbidden"})
	}
	for(let i=0;i<loggedSessions.length;i++) {
		if(token === loggedSessions[i].token) {
			let now = Date.now();
			if(now > loggedSessions[i].ttl) {
				loggedSessions.splice(i,1);
				return res.status(403).json({message:"forbidden"})
			}
			req.session = {};
			req.session.user = loggedSessions[i].user;
			loggedSessions[i].ttl = loggedSessions[i].ttl+ttl;
			return next();
		}
	}
	return res.status(403).json({message:"forbidden"})
}

createToken = () => {
	const letters = "abcdefghijABCDEFGHIJ0123456789";
	let token = "";
	for(let i=0;i<128;i++) {
		let temp = Math.floor(Math.random()*30);
		token = token + letters[temp];
	}
	return token;
}

//LOGIN API

app.post("/register",function(req,res) {
	if(!req.body) {
		return res.status(422).json({message:"Please enter proper credentials"})
	}
	if(!req.body.username || !req.body.password) {
		return res.status(422).json({message:"Please enter proper credentials"})
	}
	if(req.body.username.length < 4 || req.body.password.length < 8) {
		return res.status(422).json({message:"Username must be atleast 4 and password 8 characters long"})
	}
	let user = new userModel({
		username:req.body.username,
		password:req.body.password
	})
	user.save(function(err,user) {
		if(err) {
			console.log("Register failed, reason:"+err);
			return res.status(409).json({message:"Username is already in use"})
		}
		return res.status(200).json({message:"success"})
	})
})

app.post("/login",function(req,res) {
	if(!req.body) {
		return res.status(422).json({message:"Please enter proper credentials"})
	}
	if(!req.body.username || !req.body.password) {
		return res.status(422).json({message:"Please enter proper credentials"})
	}
	if(req.body.username.length < 4 || req.body.password.length < 8) {
		return res.status(422).json({message:"Username must be atleast 4 and password 8 characters long"})
	}
	userModel.findOne({"username":req.body.username}, function(err,user) {
		if(err) {
			return res.status(422).json({message:"Please enter proper credentials"})
		}
		if(!user) {
			return res.status(422).json({message:"Please enter proper credentials"})
		}
		let token = createToken();
		let now = Date.now();
		let session = new sessionModel({
			user:req.body.username,
			ttl:now+ttl,
			token:token
		})
		session.save(function(err) {
			if(err) {
				console.log("Session creation failed:",err)
				return res.status(422).json({message:"Please enter proper credentials"})
			}
			return res.status(200).json({token:token})
		})
	})
})

app.use("/api",isUserLogged,apiroutes);


let port = process.env.PORT || 3001

app.listen(port);

console.log("Running in port:"+port);