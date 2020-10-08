const express = require("express");
const bodyParser = require("body-parser");
const apiroutes = require("./routes/apiroutes");

let app = express();

app.use(bodyParser.json());

app.use(function(req,res,next) {
	console.log("Hi! I am a filter");
	return next();
})

// REST API

app.use("/api",apiroutes);


let port = process.env.PORT || 3001

app.listen(port);

console.log("Running in port:"+port);