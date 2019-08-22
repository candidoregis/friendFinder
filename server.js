var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3090;

// app.set("css", path.join(__dirname,"css"));


app.use(express.static(path.join(__dirname, "app/public"), {maxAge: 3456700000}));
// app.use(express.static(__dirname + "/public", {maxAge: 3456700000})); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});