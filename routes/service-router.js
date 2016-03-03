var express = require("express"); 
var route   = express.Router(); 
var Luwitte = require("../schema/luwitte-schema"); 

route.post('/luwitte',function(req, res, next){
	var post = req.body.post; 
	var link = req.body.link; 

	var session = req.session;

    console.log(session); 
	var luwitte = new Luwitte({
		text: post,
		link: link,
		client_id: session.client_id, 
		post_date: new Date()
	}); 

	luwitte.save(function(error, object){
		if(error){
			res.json({status: false}); 
			return;
		}

		res.json({status: true, object : object}); 
	}); 
}); 


route.post('/feed',function(req, res, next){
	var date = req.body.date; 

	Luwitte.find({
		post_date : { $lt : new Date(date) }
	}).
	limit(10).
	populate({ path: 'client_id', select: '_id login userName'}).
	sort({post_date : -1 }).
	exec(function(error, objects){
		if(error){
			res.json({status: false}); 
			return;
		}

		res.json(objects); 
	}); 
}); 

module.exports = route; 