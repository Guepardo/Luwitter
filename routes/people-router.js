var express = require("express"); 
var router  = express.Router(); 

var People = require("../schema/people-schema"); 

router.post("/peopleRegister", function(req, res, next){
	var name   = req.body.name;
	var age    = req.body.age; 
	var weight = req.body.weight; 

	var people = new People({
		name : name, 
		age  : age, 
		weight: weight
	}); 

	people.save(function(error, object){
		if(error)
			res.json({status : false}); 
		res.json({stauts : true}); 
	}); 

}); 

module.exports = router; 