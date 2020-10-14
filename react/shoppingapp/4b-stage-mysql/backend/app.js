const express = require("express");
const bodyParser = require("body-parser");
const apiroutes = require("./routes/apiroutes");
const mysql = require("mysql");

let app = express();

app.use(bodyParser.json());

let ttl = 3600000;

//create connection to mysql

let con = mysql.createConnection({
	host:"localhost",
	user:"test",
	password:"test",
	database:"shoppingdatabase"
})

con.connect(function(err) {
	if(err) throw err;
	let sql = "CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(50) UNIQUE, password VARCHAR(256))"
	con.query(sql,function(err,result) {
		if(err) throw err;
		console.log("Created table users if did not exist before:",result)
	})
	sql = "CREATE TABLE IF NOT EXISTS sessions (id INT AUTO_INCREMENT PRIMARY KEY, token VARCHAR(128), ttl BIGINT, user VARCHAR(50))"
	con.query(sql,function(err,result) {
		if(err) throw err;
		console.log("Created table sessions if did not exist before:",result)
	})
	sql = "CREATE TABLE IF NOT EXISTS shoppingitems (_id INT AUTO_INCREMENT PRIMARY KEY, type VARCHAR(80), count INT, price FLOAT, user VARCHAR(50))"
	con.query(sql,function(err,result) {
		if(err) throw err;
		console.log("Created table shoppingitems if did not exist before:",result)
	})
})

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
	for(let i=0;i<registeredUsers.length;i++) {
		if(req.body.username === registeredUsers[i].username) {
			return res.status(409).json({message:"Username is already in use"})
		}
	}
	let user = {
		username:req.body.username,
		password:req.body.password
	}
	registeredUsers.push(user);
	return res.status(200).json({message:"success"})
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
	for(let i=0;i<registeredUsers.length;i++) {
		if(req.body.username === registeredUsers[i].username) {
			if(req.body.password === registeredUsers[i].password) {
				let token = createToken();
				let tempttl = Date.now();
				let session = {
					user:req.body.username,
					ttl:tempttl+ttl,
					token:token
				}
				loggedSessions.push(session);
				return res.status(200).json({token:token})
				
			}
		}
	}
	return res.status(403).json({message:"forbidden"})
})

app.use("/api",isUserLogged,apiroutes);


let port = process.env.PORT || 3001

app.listen(port);

console.log("Running in port:"+port);