const User = require("../models/User");
const uData = require("../db/users.json");

const usersData = uData.map(value => {
  const user = {
    firstname: value.firstname,
    lastname: value.lastname,
    email: value.email
  };
  return user;
});

User.deleteMany({}).then(() => {
  User.create(usersData)
    .then(users => {
      console.log(users);
      process.exit();
    })
    .catch(err => {
      console.log(err);
    });
});
