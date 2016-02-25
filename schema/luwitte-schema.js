var mongoose = require("mongoose");

var luwitteSchema = mongoose.Schema({
  text: {type: String, required: true},
  link: {type: String, required: true}, 
  post_date: {type: Date, required: true}, 
  client_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true}
});

var Luwitte = mongoose.model('Luwitte', luwitteSchema); 
module.exports = Luwitte;
