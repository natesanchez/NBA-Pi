const Champ = require("../models/Champ")
const nbaData = require("../db/nba.json");


const champsData = nbaData[0].championships.map(item => {
    const champs = {
        year: item.year,
        champion: item.champion,
        runnerUp: item.runnerUp
    }
    return champs
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
