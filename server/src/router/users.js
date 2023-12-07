const express = require("express");
const route = express.Router();
const usersController = require("../controller/usersController");

route.get("/user", usersController.getAllUsers);
route.post("/user", usersController.Login);

module.exports = route;
