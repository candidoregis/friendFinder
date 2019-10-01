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

    });
};
