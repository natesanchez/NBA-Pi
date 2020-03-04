const mongoose = require("../db/connection")
const Schema = mongoose.Schema;


const champSchema = new Schema({
    year: Number,
    champion: String,
    runnerUp: String
});


const Champ = mongoose.model("Champ", champSchema);
module.exports = Champ; 