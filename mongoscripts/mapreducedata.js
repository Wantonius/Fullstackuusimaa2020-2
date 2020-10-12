var data = [];
var customers = ["Matti","Jaska","Tiina","Martti","Seija"];

for(let i=0;i<5000;i++) {
	var tempId = Math.floor(Math.random()*5);
	var cost = Math.floor(Math.random()*100)+1;
	data[i] = {
		"custId":customers[tempId],
		"price":cost
	}
}

var conn = new Mongo();
var db = conn.getDB("mapreducetest");

db.data.insert(data);