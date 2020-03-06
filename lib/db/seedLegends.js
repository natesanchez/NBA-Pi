const Legend = require("../models/Legend")
const nbaData = require("../db/nba.json");


const legendsData = nbaData[0].legends.map(item => {
    const legends = {
        name: item.name,
        team: item.team
    }
    return legends
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
