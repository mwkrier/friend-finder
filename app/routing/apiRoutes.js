// DEPENDENCIES
var path = require("path");
var friends = require("../api/friends.js");

// ROUTING
module.exports = function(app) {
  
  // get api info
   app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });


  app.post("/api/friends", function(req, res) {
      
    //Variables
    var scores = req.body.scores;
    var match;
    var matchIndex=0;
    var matchTotal=0;
    var scoreTotal=0;
    
    
    // compares scores with input scores from user
    for (var i= 0; i < friends.length; i++) {
        
            for(var k = 0; k < scores.length; k++){

            scoreTotal += (Math.abs(parseInt(friends[i].scores[k])) - parseInt(scores[k]));
            console.log(scoreTotal);
        }

        if (matchTotal >= scoreTotal) {
            matchTotal = scoreTotal;
            matchIndex = i;
        }  
    }
        // get the match
       match =  friends[matchIndex];
       res.json(match);
   
       friends.push(req.body);     
});
};