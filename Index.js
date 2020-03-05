const express = require("express");
const app = express();
const parser = require("body-parser");
const Team = require("./lib/models/Team")
const Champ = require("./lib/models/Champ")
// const Legend = require("../models/Legend")

app.use(parser.json());


app.get("/", (req, res) => {
    res.json({
        Teams: "http://localhost:3000/teams",
        Championships: "http://localhost:3000/championships",
        Legends: "http://localhost:3000/legends",
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


// app.get("/legends", function (req, res) {
//     NBA.find({}).then(nba => {
//         res.json(nba[0].legends);
//     });
// });


// app.post("/teams", function (req, res) {
//     Team.create(req.body).then(teams => res.json(teams));
// });


app.listen(3000, () => {
    console.log("Server Running!")
});