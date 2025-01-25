const mongoose = require("mongoose");

const confessionSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 500,
  },
  anonymityLevel: {
    type: String,
    enum: ["Anonymous", "Partially Anonymous", "Public"],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Confession", confessionSchema);
