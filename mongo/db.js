var mongoose = require("mongoose"); 


module.exports = function(){
	mongoose.connect('mongodb://localhost/luwitter'); 

	var db = mongoose.connection; 
	db.on('error', console.error.bind(console,'connection error: ')); 

	db.on('open', function(){
		console.log('done'); 
	}); 
}; 
