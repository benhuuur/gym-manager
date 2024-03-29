const mongoose = require("mongoose");
const { gymSchema } = require("./gym");
const { personSchema } = require("./people");
const User = mongoose.model(
  "Users",
  new mongoose.Schema({
    login: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 4,
    },
    person: {
      type: personSchema,
      required: false,
    },
    gym: {
      type: gymSchema,
      required: false,
    },
  })
);

module.exports = User;
