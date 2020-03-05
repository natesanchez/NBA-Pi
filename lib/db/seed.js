const Team = require("../models/Team")
const Champ = require("../models/Champ")
const Legend = require("../models/Legend")
const Player = require("../models/Player")
const nbaData = require("../db/nba.json");

const teamsData = nbaData[0].teams.map(item => {
    const teams = {
        id: item.id,
        abbreviation: item.abbreviation,
        city: item.city,
        conference: item.conference,
        division: item.division,
        founded: item.founded,
        website: item.website,
        full_name: item.full_name,
        name: item.name,
        logo: item.logo
    }
    return teams
});

const champsData = nbaData[0].championships.map(item => {
    const champs = {
        year: item.year,
        champion: item.champion,
        runnerUp: item.runnerUp
    }
    return champs
});

const legendsData = nbaData[0].legends.map(item => {
    const legends = {
        name: item.name,
        team: item.team
    }
    return legends
});

const playersData = nbaData[0].players.map(item => {
    const player = {
        firstName: item.firstName,
        lastName: item.lastName,
        playerId: item.playerId,
        teamId: item.teamId
    }
    return player
});



Team.deleteMany({}).then(() => {
    Team.create(teamsData)
        .then(teams => {
            console.log(teams);
            process.exit();
        })
        .catch(err => {
            console.log(err);
        });
});


Champ.deleteMany({}).then(() => {
    Champ.create(champsData)
        .then(champs => {
            console.log(champs);
            process.exit();
        })
        .catch(err => {
            console.log(err);
        });
});


Legend.deleteMany({}).then(() => {
    Legend.create(legendsData)
        .then(legends => {
            console.log(legends);
            process.exit();
        })
        .catch(err => {
            console.log(err);
        });
});

Player.deleteMany({}).then(() => {
    Player.create(playersData)
        .then(players => {
            console.log(players);
            process.exit();
        })
        .catch(err => {
            console.log(err);
        });
});
