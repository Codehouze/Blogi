const db = require("../src/model");
const Question = db.question;

exports.create = async (req, res) => {
  try {
    const { title, body, tag, status } = req.body;

    // Create a Question
    const question = new Question({
      title,
      body,
      tag
    });

    // Save User in the database
    const newQuestion = await question.save(question);
    return res
      .status(200)
      .json({ success: true, message: "Question Uploaded", newQuestion });
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while creating the User.",
    });
  }
};

// search for a question
exports.findOne = (req, res) => {};

// Update a User by the id in the request
exports.update = (req, res) => {};
