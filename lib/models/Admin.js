const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const adminsSchema = new Schema({
  username: String,
  password: String
});

const Admin = mongoose.model("Admin", adminsSchema);
module.exports = Admin;
