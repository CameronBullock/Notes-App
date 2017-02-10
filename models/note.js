var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;
var Notes = new Schema({
  title : String,
  description : String,
});

module.exports = mongoose.model( 'Notes', Notes );
