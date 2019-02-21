// NPM packages
// ===========================================
var express = require("express");
var path = require("path");

var friends = require('./app/data/friends.js');

// Tells node we are creating an express server
var app = express();

// Initial Port to use in listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle dara parsing 
// ===========================================
app.use(express.static(__dirname + "/../public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes 
// ============================================
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Start the server to begin listening 
// ============================================
app.listen(PORT, function() {
    console.log('App is listening on PORT: ' + PORT);
}); 