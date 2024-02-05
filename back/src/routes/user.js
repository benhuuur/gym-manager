const LoginController = require("../controller/UserController");
const express = require("express");
const route = express.Router();

route.post("/login", LoginController.login); // Route for the initial login (username)
route.post("/password", LoginController.password); // Route for password validation

module.exports = route;
