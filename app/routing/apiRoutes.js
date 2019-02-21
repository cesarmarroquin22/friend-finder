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
      var newUser = req.body;
      var userScore = newUser.score;
      var scoreArr = [];
      var findMatch = 0;
      var diff = 0;

      for (var i = 0; i < friendsData.length; i++) {
        diff = 0;

        console.log(JSON.stringify(friendsData[i]));


        for (var j = 0; j < userScore.length; j++) {
          diff += (Math.abs(parseInt(friendsData[i].score[j]) - parseInt(userScore[j])));
        }
        scoreArr.push(diff);

      }
      for (var i = 0; i < scoreArr.length; i++) {
        if(scoreArr[i] < scoreArr[findMatch]) {
          findMatch = i;
        }
      }

      var bff = friendsData[findMatch];
      res.json(bff);

      console.log(req.body);
      friendsData.push(req.body);
    });
  }