const express = require("express");
const user = require("../src/routes/user");
const person = require("../src/routes/person");
const gym = require("../src/routes/gym");
module.exports = function (app) {
  app.use(express.json()).use("/api/user", user);
  app.use(express.json()).use("/api/person", person);
  app.use(express.json()).use("/api/gym", gym);
};
