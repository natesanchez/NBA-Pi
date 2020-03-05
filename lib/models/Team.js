const mongoose = require("../db/connection")
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    teamId: Number,
    abbreviation: String,
    city: String,
    conference: String,
    division: String,
    founded: Number,
    website: String,
    full_name: String,
    name: String,
    logo: String,
});

const Team = mongoose.model("Team", teamSchema);
module.exports = Team;