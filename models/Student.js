const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    age: { type: Number, required: true },
    major: { type: mongoose.Schema.Types.ObjectId, ref: "Major" },
    email: { type: String, required: true },
    phone: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
