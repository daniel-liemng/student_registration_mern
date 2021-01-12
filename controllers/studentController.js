const Student = require("../models/Student");

const getStudents = async (req, res) => {
  try {
    const students = await Student.find()
      .populate("major", ["major"])
      .sort({ createdAt: -1 });

    res.json(students);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

const getStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).populate("major", [
      "major",
    ]);

    if (!student) {
      return res.status(404).json({ error: "No student found" });
    }

    res.json(student);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

const addStudent = async (req, res) => {
  const { firstname, lastname, age, major, email, phone } = req.body;

  try {
    const student = await Student.create({
      firstname,
      lastname,
      age,
      major,
      email,
      phone,
    });

    res.status(201).json(student);
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({ error: messages });
    } else {
      return res.status(500).json({ error: "Server Error" });
    }
  }
};

const editStudent = async (req, res) => {
  const { firstname, lastname, age, major, email, phone } = req.body;

  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      { firstname, lastname, age, major, email, phone },
      { new: true }
    );

    res.json(student);
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({ error: messages });
    } else {
      return res.status(500).json({ error: "Server Error" });
    }
  }
};

const deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndRemove(req.params.id);

    res.json({ message: "Student Deleted" });
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = {
  getStudents,
  getStudent,
  addStudent,
  editStudent,
  deleteStudent,
};
