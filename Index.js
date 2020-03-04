const express = require("express");
const app = express();
const parser = require("body-parser");
const NBA = require("./lib/models/NBA")

app.use(parser.json());


app.get("/", function (req, res) {
    NBA.find({}).then(nba => {
        res.json(nba);
    });
})


app.get("/teams", function (req, res) {
    NBA.find({}).then(nba => {
        res.json(nba[0].teams);
    });
});


app.get("/championships/", function (req, res) {
    NBA.find({}).then(nba => {
        res.json(nba[0].championships);
    });
});


app.get("/legends/", function (req, res) {
    NBA.find({}).then(nba => {
        res.json(nba[0].legends);
    });
});


app.listen(3000, () => {
    console.log("Server Running!")
});