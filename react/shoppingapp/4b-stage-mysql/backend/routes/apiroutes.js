const express = require("express");
const mysql = require("mysql");

let router = express.Router();

let con = mysql.createConnection({
	host:"localhost",
	user:"test",
	password:"test",
	database:"shoppingdatabase"
})

router.get("/shopping",function(req,res) {
	let sql = "SELECT * FROM shoppingitems WHERE user='"+req.session.user+"'";
	con.query(sql,function(err,items) {
		if(err) {
			res.status(500).json({message:"database failure"})
			throw err;
		}
		return res.status(200).json(items);
	})
})

router.post("/shopping",function(req,res) {
	let sql = "INSERT INTO shoppingitems (type,count,price,user) VALUES ('"+req.body.type+"',"+req.body.count+","+req.body.price+",'"+req.session.user+"')"
	con.query(sql,function(err) {
		if(err) {
			res.status(500).json({message:"database failure"})
			throw err;
		}
		return res.status(200).json({message:"success"})
	})
	
})

router.delete("/shopping/:id",function(req,res) {
	let tempId = parseInt(req.params.id,10);
	let sql = "DELETE FROM shoppingitems WHERE _id="+tempId+" AND user='"+req.session.user+"'";
	con.query(sql,  function(err,result) {
		if(err) {
			res.status(500).json({message:"database failure"})
			throw err;			
		}
		if(result.affectedRows === 0) {
			return res.status(404).json({message:"not found"})
		}
		return res.status(200).json({message:"success"})
	})
})

router.put("/shopping/:id",function(req,res) {
	let tempId = parseInt(req.params.id,10);
	let sql = "UPDATE shoppingitems SET type='"+req.body.type+"',count="+req.body.count+",price="+req.body.price+" WHERE _id="+tempId+" AND user='"+req.session.user+"'";
	con.query(sql,  function(err,result) {
		if(err) {
			res.status(500).json({message:"database failure"})
			throw err;			
		}
		if(result.affectedRows === 0) {
			return res.status(404).json({message:"not found"})
		}
		return res.status(200).json({message:"success"})
	})
})

module.exports = router;