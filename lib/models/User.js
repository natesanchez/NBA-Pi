const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String
});

const User = mongoose.model("User", usersSchema);
module.exports = User;
