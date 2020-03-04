const mongoose = require("../db/connection")
const Schema = mongoose.Schema;

const legendSchema = new Schema({
    name: String,
    team: String
});


const Legend = mongoose.model("Legend", legendSchema);
module.exports = Legend; 