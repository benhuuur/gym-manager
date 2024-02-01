const LoginController = require("../controller/loginController");
const express = require("express");
const route = express.Router();

route.post("/username", LoginController.username); // Route for the initial login (username)
route.post("/password", LoginController.password); // Route for password validation

module.exports = route;
