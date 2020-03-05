const mongoose = require("../db/connection")
const Schema = mongoose.Schema;


const playerSchema = new Schema({
    firstName: String,
    lastName: String,
    playerId: Number,
    teamId: Number
});


const Player = mongoose.model("Player", playerSchema);
module.exports = Player; 