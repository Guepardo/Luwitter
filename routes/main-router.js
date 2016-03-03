var express = require('express'); 
var route   = express.Router(); 
var Client  = require("../schema/client-schema");  
var Luwitte = require("../schema/luwitte-schema"); 

route.get("/",function(req, res, next){
	var session = req.session; 	


	if( typeof session.client_id == "undefined"){
		res.redirect("/login"); 
		return; 
	}

	Client.find({
		_id: session.client_id
	},function(error, client){
		if(error){
			res.json({status: false}); 
			return; 
		}

		console.log(client); 
		var client = client[0]; 
		
		var count = 0; 
		Luwitte.count({
			client_id: session.client_id
		},
		function(error,result){
			count = result; 
			console.log("Quantidade de twitters : "+ result);
			res.render("mainPage.html",{
				numFollows: 0, 
				userName: client.userName, 
				numFriends: 0, 
				numLuwittes:count,
				id: session.client_id,
				login: client.login
			}); 
		});

		

	}); 
}); 

module.exports = route; 