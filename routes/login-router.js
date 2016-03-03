var express = require('express');
var route  = express.Router();

var Client = require("../schema/client-schema");

// Route to forwad a user to login view.
route.get('/login',function(req, res, next){
	res.render('login.html');
});

// Route to register an user.
route.post('/login/register', function(req, res, next){
	var login    = req.body.login;
	var pass1    = req.body.pass;
	var pass2    = req.body.pass2;
	var userName = req.body.userName; 

	if(pass1 != pass2)
		res.json({status: false, msg : 'senhas diferentes'});

	var client = new  Client({
		login : login,
		password: pass1, 
		userName: userName
	});

	client.save(function(error, object){
		if(error){
			res.json({ status: false, msg : error });
			return;
		}
			res.json({status: true});
		});
});

route.post('/login', function(req, res, next){
	var login = req.body.login;
	var pass  = req.body.pass;

	var session = req.session; 

	Client.find({
		login: login,
		password: pass
	}, function(error, client){
		if(error) {
			res.json({ status: false, msg: error});
			return; 
		}

		if(client.length == 0){
			res.json({status: false, msg: "usuário não cadastrado"});
			return;
		}
		else{
			session.client_id = client[0]._id; 
			session.userName  = client[0].userName;
			session.authenticated = true; 
			res.json({status: true }); 
		}
	});
});

module.exports = route;
