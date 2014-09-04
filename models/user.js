var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var shotSchema = new Schema ({
	shotName: String,
	examDate: String
})


var petSchema = new Schema({
	name: {
  	type: String,
  	required: true
  },
	age: Number,
	weight: Number,
	license: String,
	breed: String,
	markings: String,
	shots: [shotSchema],
	photo: String
})

// Check to see if we can default pets to an empty array
var userSchema = new Schema({
	userName: {
  	type: String,
  	required: true
  },
  fbId: {
  	type: String,
  	required: true
  },
  pets: [petSchema]
//was going to add shots here but thinking that is contained in pets array
});

module.exports = mongoose.model('User', userSchema)
// module.exports = mongoose.model('User', userSchema);
