var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var PORT = precess.env.PORT || 8080;

app.use(express.static("public"));
apps.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log("App Listening on PORT: " + PORT);
});