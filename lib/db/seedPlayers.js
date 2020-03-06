const Player = require("../models/Player")
const nbaData = require("../db/nba.json");


const playersData = nbaData[0].players.map(item => {
    const player = {
        firstName: item.firstName,
        lastName: item.lastName,
        playerId: item.playerId,
        teamId: item.teamId
    }
    return player
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