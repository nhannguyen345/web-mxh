const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  UserId: {
    type: Number,
    require: true,
  },
  UserName: {
    type: String,
    require: true,
  },
  UserAge: {
    type: Number,
    require: true,
  },
});

const Users = mongoose.model("Users", Schema);

module.exports = Users;
