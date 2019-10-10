// Require our dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");

// Setup our port to be either the host's designated port, or 3000
var PORT = process.env.PORT || 3000;

// Instantiate our Express App
var app = express();

// Set up an Express Router
var router = express.Router();

// Require our routes file pass our router object
require("./config/routes")(router);

// Designate our public folder as a static directory
app.use(express.static(__dirname + "/public"));

// Connect Handlebars to our Express app
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Have every request go through our router middleware
app.use(router);

// If deployed, use the deployed database. Otherwise use the local articleScraper database
var db = process.env.MONGODB_URI || "mongodb://localhost/articleScraper";

// Connect mongoose to our dartabase
mongoose.connect(db, function(error) {
  // Log any errors connecting with mongoose
  if (error) {
    console.log(error);
  }
  // Or log a success message
  else {
    console.log("mongoose connection is successful");
  }
});

// Listen on the port
app.listen(PORT, function() {
  console.log("Listening on port:" + PORT);
});