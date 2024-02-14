const PersonController = require("../controller/PersonController");
const express = require("express");
const route = express.Router();

route.post("/create", PersonController.create);
route.post("/update", PersonController.update); // Route for the first login (update data)
route.post("/delete/:id", PersonController.delete);
route.get("/", PersonController.getAll);
route.get("/:id", PersonController.getById);
route.get("/gym/:id", PersonController.getByGymId);

module.exports = route;
