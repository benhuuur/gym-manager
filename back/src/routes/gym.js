const GymController = require("../controller/GymController");
const express = require("express");
const route = express.Router();

route.post("/create", GymController.create); // Route for the initial login (username)

module.exports = route;
