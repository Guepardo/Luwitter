var express = require("express"); 
var router  = express.Router(); 


router.get('/', function(req, res, next){
	if(req.session.count == 'undefined')
		req.session.count = 0; 

	console.log("Entrei aqui"+ req.session.count++ +"vezes"); 
	res.render("index.html"); 

}); 

module.exports = router; 