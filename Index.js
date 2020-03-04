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

app.get("/teams/:team", function (req, res) {
    NBA.find({}).then(nba => {
        res.json(nba[0].teams.filter(item => req.params.team.toLowerCase() == item.name.toLowerCase())[0]);
    });
});


app.get("/championships", function (req, res) {
    NBA.find({}).then(nba => {
        res.json(nba[0].championships);
    });
});


app.get("/legends", function (req, res) {
    NBA.find({}).then(nba => {
        res.json(nba[0].legends);
    });
});

app.get("/championships/:year", function (req, res) {
    NBA.find({}).then(nba => {
        res.json(nba[0].championships.filter(item => req.params.year == item.year)[0])
    });
});

app.post("/legends", function (req, res) {
    NBA.create(req.body).then(nba => res.json(nba.legends));
});


app.listen(3000, () => {
    console.log("Server Running!")
});