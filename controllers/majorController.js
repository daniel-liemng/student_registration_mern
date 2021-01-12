const Major = require("../models/Major");

const getMajors = async (req, res) => {
  try {
    const majors = await Major.find().sort({ createdAt: -1 });

    res.json(majors);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

const getMajor = async (req, res) => {
  try {
    const major = await Major.findById(req.params.id);

    if (!major) {
      return res.status(404).json({ error: "No major found" });
    }

    res.json(major);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

const addMajor = async (req, res) => {
  try {
    const major = await Major.create({ major: req.body.majorText });

    res.status(201).json(major);
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({ error: messages });
    } else {
      return res.status(500).json({ error: "Server Error" });
    }
  }
};

const editMajor = async (req, res) => {
  try {
    const major = await Major.findByIdAndUpdate(
      req.params.id,
      {
        major: req.body.majorText,
      },
      { new: true }
    );

    res.json(major);
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({ error: messages });
    } else {
      return res.status(500).json({ error: "Server Error" });
    }
  }
};

const deleteMajor = async (req, res) => {
  try {
    await Major.findByIdAndRemove(req.params.id);

    res.json({ message: "Major Deleted" });
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = { getMajors, getMajor, addMajor, editMajor, deleteMajor };
