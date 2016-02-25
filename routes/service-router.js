var express = require("express"); 
var route   = express.Router(); 
var Luwitte = require("../schema/luwitte-schema"); 

route.post('/luwitte',function(req, res, next){
	var post = req.body.post; 
	var link = req.body.link; 

	var session = req.session; 

	var luwitte = new Luwitte({
		text: post,
		link: link,
		client_id: session.client_id, 
		post_date: new Date()
	}); 

	luwitte.save(function(error, object){
		if(error)
				res.json({status: false}); 

		res.json({status: true}); 
	}); 
}); 

module.exports = route; 