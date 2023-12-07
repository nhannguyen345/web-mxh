const express = require("express");
const route = express.Router();
const usersLinkController = require("../controller/usersLinkController");

route.get("/userLink", usersLinkController);

module.exports = route;
