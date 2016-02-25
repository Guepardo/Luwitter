var express = require('express'); 
var route   = express.Router(); 


route.get("/",function(req, res, next){
	var session = req.session; 
 
	res.render("mainPage.html",{
		numFollows: 0, 
		userName: 'teste', 
		numFriends: 0, 
		numLuwittes:0,
		id: session.client_id,
		login: '@teste'
	}); 
}); 

module.exports = route; 