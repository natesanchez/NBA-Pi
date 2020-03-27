const express = require("express");
const app = express();
const parser = require("body-parser");
const Team = require("./lib/models/Team");
const Champ = require("./lib/models/Champ");
const Legend = require("./lib/models/Legend");
const Player = require("./lib/models/Player");
const User = require("./lib/models/User");
const cors = require("cors");

app.use(parser.json());

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    Message: "Welcome to NBA-Pi!",
    Documentation: "https://github.com/natesanchez/NBA-Pi",
    Teams: "https://nba-pi.herokuapp.com/teams",
    Championships: "https://nba-pi.herokuapp.com/championships",
    Legends: "https://nba-pi.herokuapp.com/legends",
    Players: "https://nba-pi.herokuapp.com/players"
  });
});

// app.get("/", (req, res) => {
//     res.json({
//         Message: "Welcome to NBA-Pi!",
//         Documentation: "https://github.com/natesanchez/NBA-Pi",
//         Teams: "http://localhost:4000/teams",
//         Championships: "http://localhost:4000/championships",
//         Legends: "http://localhost:4000/legends",
//         Players: "http://localhost:4000/players"
//     })
// })

app.get("/teams", function(req, res) {
  Team.find({}).then(teams => {
    res.json(teams);
  });
});

app.get("/teams/:team", function(req, res) {
  let input = req.params.team;
  input = input[0].toUpperCase() + input.substr(1);
  Team.findOne({ name: input }).then(teams => {
    res.json(teams);
  });
});

app.get("/championships", function(req, res) {
  Champ.find({}).then(champs => {
    res.json(champs);
  });
});

app.get("/championships/:year", function(req, res) {
  let input = req.params.year;
  input = input[0].toUpperCase() + input.substr(1);
  Champ.findOne({ year: input }).then(champs => {
    res.json(champs);
  });
});

app.get("/legends", function(req, res) {
  Legend.find({}).then(legends => {
    res.json(legends);
  });
});

//new project
app.get("/users12345users", function(req, res) {
  User.find({}).then(users => {
    res.json(users);
  });
});

app.get("/players", function(req, res) {
  Player.find({}).then(players => {
    res.json(players);
  });
});

app.get("/players/:lastName", function(req, res) {
  let input = req.params.lastName;
  input = input[0].toUpperCase() + input.substr(1);
  Player.find({ lastName: input }).then(players => {
    res.json(players);
  });
});

app.get("/players/team/:teamId", function(req, res) {
  let input = req.params.teamId;
  input = input[0].toUpperCase() + input.substr(1);
  Player.find({ teamId: input }).then(players => {
    res.json(players);
  });
});

app.post("/legends", function(req, res) {
  Legend.create(req.body).then(legends => res.json(legends));
});

app.post("/players", function(req, res) {
  Player.create(req.body).then(players => res.json(players));
});

app.post("/users12345users", function(req, res) {
  User.create(req.body).then(users => res.json(users));
});

app.delete("/users12345users/:_id", function(req, res) {
  User.findOneAndDelete({ _id: req.params._id }, req.body).then(users => {
    res.json(users);
  });
});

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

// app.listen(4000, () => {
//     console.log("Server Running!")
// });
