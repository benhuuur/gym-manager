const PersonController = require("../controller/PersonController");
const express = require("express");
const route = express.Router();

route.post("/create", PersonController.create); // Route for the initial login (username)
route.post("/update", PersonController.update); // Route for the first login (username)
route.post("/delete/:id", PersonController.delete);
route.get("/", PersonController.getAll);
route.get("/:id", PersonController.getById);


module.exports = route;