const mongoose = require("../db/connection")
const Schema = mongoose.Schema;

const legendsSchema = new Schema({
    name: String,
    team: String
});


const championshipsSchema = new Schema({
    year: Number,
    champion: String,
    runnerUp: String
});


const teamsSchema = new Schema({
    id: Number,
    abbreviation: String,
    city: String,
    conference: String,
    division: String,
    founded: Number,
    website: String,
    full_name: String,
    name: String,
    logo: String
});


const NBASchema = new Schema({
    teams: [teamsSchema],
    championships: [championshipsSchema],
    legends: [legendsSchema],
});


const NBA = mongoose.model("NBA", NBASchema);
module.exports = NBA; 