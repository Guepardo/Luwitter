var mongoose = require('mongoose'); 

var peopleSchema = mongoose.Schema({
	name:   String, 
	age :   Number, 
	weight: Number
}); 

var People = mongoose.model('People', peopleSchema); 

module.exports = People; 