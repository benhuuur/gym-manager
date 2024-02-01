const express = require("express");
const login = require("../src/routes/login");
module.exports = function (app) {
  app.use(express.json()).use("/api/login", login);
};
