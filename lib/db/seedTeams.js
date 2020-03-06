const Team = require("../models/Team")
const nbaData = require("../db/nba.json");

const teamsData = nbaData[0].teams.map(item => {
    const teams = {
        teamId: item.teamId,
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
