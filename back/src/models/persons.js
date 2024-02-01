const mongoose = require("mongoose");
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
    minlength: 11,
  },
  birth: {
    type: Date,
    required: true,
  },
  weight: {
    type: Number,
    required: false,
  },
  height: {
    type: Number,
    required: false,
  },
  objective: {
    type: String,
    required: false,
  },
  experience: {
    type: String,
    required: false,
  },
  trainingTime: {
    type: Number,
    required: false,
  },
  frequency: {
    type: Number,
    required: false,
  },
  sheet: {
    type: [String],
    required: false,
  },
  isFirst: {
    type: Boolean,
    required: true,
  },
});
const Person = mongoose.model("Persons", personSchema);

exports.Person = Person;
exports.personSchema = personSchema;
