const db = require("../src/model");
const redis = require("redis");
const Question = db.question;
const port = 6300;
const host = "127.0.0.1";
const redisClient = redis.createClient(port, host);

exports.create = async (req, res) => {
  try {
    const { title, body, tags } = req.body;

    // Create a Question
    const question = new Question({
      title,
      body,
      tags,
    });
    if (redis) {
      redisClient.on("connect", function () {
        console.log("Connected!");
      });
    }

    // console.log(client);
    //  client.on('connect', function() {
    //     return console.log('Connected!');
    //   })

    // Save User in the database
    const newQuestion = await question.save(question);

    // Set data to Redis
    client.set("title", `${newQuestion.title}`, redis.print);
    return res
      .status(200)
      .json({ success: true, message: "Question Uploaded", newQuestion });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: err.message || "Some error occurred while creating the User.",
    });
  }
};

// search for a question
exports.findOne = (req, res) => {};

// Update a User by the id in the request
exports.update = (req, res) => {};
