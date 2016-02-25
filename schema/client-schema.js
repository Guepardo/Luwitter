var mongoose = require('mongoose');

var clientSchema = mongoose.Schema({
	login:    { type: String, required: true, unique: true},
	userName: { type: String, required: true}, 
	password: { type: String, required: true}
});

var Client = mongoose.model('Client',clientSchema);

module.exports = Client;
