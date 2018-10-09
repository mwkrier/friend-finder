var path = require("path");

var friends = require("../api/friends.js");

module.exports = function(app){

    app.get("/api/friends", function(req, res){
        return res.json(friends);
    });

    app.post("/api/friends", function(req, res){
        var userData = req.body;
        friends.arr.push(userData);
        console.log("User Data Pushed")

        var match = calcMatch(b.scores);

        res.json(match);
    });

    function calcMatch(userScoreArr) {
        var lowestTotal = 100;
        var grandTotal = 0;
        var index = 0;
        for (var i = 0; i < data.arr.length-1; i++) {
            for (var j = 0; j < 10; j++) {
                grandTotal += Math.abs(data.arr[i].scores[j] - userScoreArr[j]);
            }
            if (grandTotal < lowestTotal) {
                lowestTotal = grandTotal;
                index = i;
            }
            grandTotal = 0;
        }
        return data.arr[index-1];
    }
}