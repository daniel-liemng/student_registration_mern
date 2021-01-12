const mongoose = require("mongoose");

const majorSchema = mongoose.Schema(
  {
    major: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Major", majorSchema);
