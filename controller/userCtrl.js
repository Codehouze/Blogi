const db = require("../src/model");
const User = db.user;
const bcrypt = require("bcrypt");
const createToken = require("../utils/createToken");

// Create and Save a new User
exports.create = async (req, res) => {
  try {
    const { DisplayName, email, password } = req.body;

    // Validate request
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res
        .status(400)
        .json({ success: false, message: "user already exist" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a User
    const user = new User({
      DisplayName,
      email,
      password: hashedPassword,
    });

    // Save User in the database
    const newUser = await user.save(user);
    newUser.password = null;
    return res
      .status(200)
      .json({ success: true, message: "User created", newUser });
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while creating the User.",
    });
  }
};
// Sign in a User
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Incorrect email or password" });
    }
    const payload = {
      DisplayName: user.DisplayName,
      email: user.email,
    };
    const match = bcrypt.compareSync(password, user.password);
    if (!match) {
      return res
        .status(404)
        .json({ success: false, message: "Incorrect email or password" });
    }

    const token = createToken(payload, "2d");

    const data = { payload, token };
    user.password = null;

    return res.status(200).json({ success: true, message: "Success", data });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
};
