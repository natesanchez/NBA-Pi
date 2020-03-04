const Team = require("../models/Team")
const Champ = require("../models/Champ")
// const Team = require("../models/Team")
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

// const teamsData = nbaData[0].teams.map(item => {
//     const teams = {
//         id: item.id,
//         abbreviation: item.abbreviation,
//         city: item.city,
//         conference: item.conference,
//         division: item.division,
//         founded: item.founded,
//         website: item.website,
//         full_name: item.full_name,
//         name: item.name,
//         logo: item.logo
//     }
//     return teams
// });


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
