var myMapFunction = function() {
	emit(this.custId,this.price);
}

var myReduceFunction = function(keyCustId,price) {
	return Array.sum(price)
}

var conn = new Mongo();
var db = conn.getDB("mapreducetest");

db.data.mapReduce(myMapFunction,myReduceFunction,{out:"mapreduceresults"})