const Admin = require("../models/Admin");
const aData = require("../db/admins.json");

const adminsData = aData.map(value => {
  const admin = {
    username: value.username,
    password: value.password
  };
  return admin;
});

Admin.deleteMany({}).then(() => {
  Admin.create(adminsData)
    .then(admins => {
      console.log(admins);
      process.exit();
    })
    .catch(err => {
      console.log(err);
    });
});
