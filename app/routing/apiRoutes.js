var path = require("path");

module.exports = function (app) {
    app.get("/data/friends", function (req, res) {
        return res.json(friends);
    });

    app.get("/data/data/:friend", function (req, res) {
        var chosen = req.params.friends;

        console.log(chosen);

        for (var i = 0; i < friends.length; i++) {
            if (chosen === friends[i].routeName) {  //tem que rever routeName
                return res.json(characters[i]);
            }
        }

        return res.json(false);
    });

    app.post("/api/characters", function (req, res) {
        var newCharacter = req.body;
        newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
        console.log(newCharacter);
        characters.push(newCharacter);
        res.json(newCharacter);
    });
};
