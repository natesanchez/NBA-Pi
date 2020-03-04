const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/nba-api", { useNewUrlParser: true });

module.exports = mongoose;