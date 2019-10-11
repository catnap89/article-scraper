var mongoose = require("mongoose");

// creating schema using a mongoose.Schema function
var Schema = mongoose.Schema;

// creating a new schema called headlineSchema that requires a headline and summary 
var headlineSchema = new Schema({
  headline: {
    type: String,
    required: true,
    unique: true
  },
  summary: {
    type: String,
    required: true
  },
  date: String,
  saved: {
    type: Boolean,
    default: false
  }
});

var Headline = mongoose.model("Headline", headlineSchema);

module.exports = Headline;