const mongoose = require("mongoose");

let Schema = mongoose.Schema({
	severity:String,
	tag:String,
	desc:String,
	date:String
})

module.exports = mongoose.model("Logitem",Schema);