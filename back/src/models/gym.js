const mongoose = require("mongoose");

const gymSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  equipments: {
    type: [String],
    required: true,
  },
});

const Gym = mongoose.model("Gyms", gymSchema);

exports.gymSchema = gymSchema;
exports.Gym = Gym;
