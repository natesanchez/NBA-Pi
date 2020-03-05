const express = require("express");
const app = express();
const parser = require("body-parser");
const Team = require("./lib/models/Team")
const Champ = require("./lib/models/Champ")
const Legend = require("./lib/models/Legend")
const Player = require("./lib/models/Player")

app.use(parser.json());


app.get("/", (req, res) => {
    res.json({
        Message: "Welcome to NBA-Pi!",
        Documentation: "https://github.com/natesanchez/NBA-Pi",
        Teams: "http://localhost:3000/teams",
        Championships: "http://localhost:3000/championships",
        Legends: "http://localhost:3000/legends",
        Players: "http://localhost:3000/players"
    })
})


app.get("/teams", function (req, res) {
    Team.find({}).then(teams => {
        res.json(teams);
    });
});


app.get("/teams/:team", function (req, res) {
    let input = req.params.team
    input = input[0].toUpperCase() + input.substr(1);
    Team.findOne({ name: input }).then(teams => {
        res.json(teams);
    });
});


app.get("/championships", function (req, res) {
    Champ.find({}).then(champs => {
        res.json(champs);
    });
});


app.get("/championships/:year", function (req, res) {
    let input = req.params.year
    input = input[0].toUpperCase() + input.substr(1);
    Champ.findOne({ year: input }).then(champs => {
        res.json(champs);
    });
});


app.get("/legends", function (req, res) {
    Legend.find({}).then(legends => {
        res.json(legends);
    });
});


app.get("/players", function (req, res) {
    Player.find({}).then(players => {
        res.json(players);
    });
});


app.get("/players/:lastName", function (req, res) {
    let input = req.params.lastName
    input = input[0].toUpperCase() + input.substr(1);
    Player.find({ lastName: input }).then(players => {
        res.json(players);
    });
});


app.get("/players/team/:teamId", function (req, res) {
    let input = req.params.teamId
    input = input[0].toUpperCase() + input.substr(1);
    Player.find({ teamId: input }).then(players => {
        res.json(players);
    });
});


app.post("/legends", function (req, res) {
    Legend.create(req.body).then(legends => res.json(legends));
});


app.post("/players", function (req, res) {
    Player.create(req.body).then(players => res.json(players));
});


app.listen(3000, () => {
    console.log("Server Running!")
});