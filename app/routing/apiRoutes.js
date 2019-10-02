var path = require("path");
var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/data/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        var bestMatch = {
            friendName: "",
            friendPhoto: "",
            friendsDistancePoints: 100
        }
        console.log("------------------------------ BEST MATCH START ");
        console.log(bestMatch);

        var userData = req.body;
        
        var userScores = userData.userScores;
        //var userName = userData.name;
        //var userPhoto = userData.photo;

        console.log("------------------------------ USER DATA ");
        console.log(userData);
        console.log("------------------------------ USER SCORE ");
        console.log(userScores);
        var distancePoints = 0;

        for (var i = 0; i < friends.length-1; i++){
            distancePoints = 0;
            for(var j = 0; j < 10; j++){
                console.log("------------------------------ USER SCORE ");
                console.log(userScores);
                distancePoints += Math.abs( parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
                console.log("------------------------------ DISTANCE POINTS ");
                console.log(distancePoints);
            }
            if(distancePoints < bestMatch.friendsDistancePoints){
                bestMatch.friendName = friends[i].name;
                bestMatch.friendPhoto = friends[i].photo;
                bestMatch.friendsDistancePoints = friends[i].distancePoints;
            }
        }
        friends.push(userData);

        console.log("------------------------------ BEST MATCH END");
        console.log(bestMatch);

        res.json(bestMatch);
    });
};
