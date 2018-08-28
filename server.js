// Dependencies
const express = require("express");
const bodyParser = require("body-parser"); //JSON responses
const mongoose = require("mongoose"); //Mongo object modelling 
const request = require("request"); //Makes the http calls
const cheerio = require("cheerio"); 
const db = require("./models");
const PORT = process.env.PORT || process.argv[2] || 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

app.use(express.static("public"));

const router = require("./controllers/api.js");

app.use(router);

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

app.listen(PORT, function () {
    console.log(`This application is running on port: ${PORT}`);
});
