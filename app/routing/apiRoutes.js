// These data sources will hold arrays of info of friends
// =================================
var friendsData = require("../data/friends");

// ROUTING
// =================================
module.exports = function(app) {

    // API GET requests
    // ========================
    app.get("/api/friends", function(req, res) {
      res.json(friendsData);
	  });

    // API POST request
    // ========================
    app.post("/api/friends", function(req, res) {
      friendsData.push(req.body);
        res.json(friendsData);
    });
  }