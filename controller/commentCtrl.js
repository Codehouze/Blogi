const db = require("../src/model");
const Comment = db.comment;

// Create and Save a new User
exports.create = async (req, res) => {
  try {
    const { description,questionId } = req.body;

    // make a comment to a question made
    const comment = new Comment({
      userId:req.user.id,
      description,
      questionId
    });

  
    const newComment = await comment.save(comment);
    return res
      .status(200)
      .json({ success: true, message: "Comment Uploaded", newComment });
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while creating the User.",
    });
  }
};
