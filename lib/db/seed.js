const NBA = require("../models/NBA")
const nbaData = require("../db/nba.json");



NBA.deleteMany({}).then(() => {
    NBA.create(nbaData)
        .then(nba => {
            console.log(nba);
            process.exit();
        })
        .catch(err => {
            console.log(err);
        });
});