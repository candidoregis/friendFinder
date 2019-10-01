// DEPENDENCIES
var express = require("express");
var path = require("path");

// EXPRESS CONFIG
var app = express();
var PORT = process.env.PORT || 3090;

// MIDDLEWARE
app.set("css", path.join(__dirname,"css"));  //not working
app.use(express.static(path.join(__dirname, "app/public"), {maxAge: 3456700000})); //not working
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// STARTING THE SERVER
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});