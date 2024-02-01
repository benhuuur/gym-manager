const mongoose = require("mongoose");
const { personSchema } = require("./persons");

const gymSchema = new mongoose.Schema({
  equipments: {
    type: [String],
    required: true,
  },
});

const Gym = mongoose.model("Gyms", gymSchema);

exports.gymSchema = gymSchema;
exports.Gym = Gym;
