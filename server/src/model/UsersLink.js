const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  FromUser: {
    type: Number,
    require: true,
  },
  ToUser: {
    type: Number,
    require: true,
  },
  UserNameFrom: {
    type: String,
    require: true,
  },
  userAgeFrom: {
    type: Number,
    require: true,
  },
  UserNameTo: {
    type: String,
    require: true,
  },
  userAgeTo: {
    type: Number,
    require: true,
  },
});

const UsersLink = mongoose.model("UsersLink", Schema);

module.exports = UsersLink;
