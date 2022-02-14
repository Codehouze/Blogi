const UserService = require("../service/userService");

const userService = new UserService();
const logger = require("../../logger/index");

exports.create = async (req, res) => {
  try {
    const { data, message, success } = await userService.create(req);

    if (!success) {
      return res.status(400).json({ success, message });
    }
    return res.json({ success, message, data });
  } catch (err) {
    logger.error(
      `Method:${req.method} Endpoint:${req.originalUrl} message:${err.message}, stack trace:${err.stack}`
    );
  }
};


// Sign in a User
exports.login = async (req, res) => {
  try {
    const { message, success,data } = await userService.login(req);

    if (!success) {
      return res.status(400).json({ success, message,data });
    }
    return res.status(200).json({ success, message,data });
  } catch (err) {
    logger.error(
      `Method:${req.method} Endpoint:${req.originalUrl} message:${err.message}, stack trace:${err.stack}`
    );
  }
};

// get all Users
exports.getAll = async (req, res) => {
  try {
    const users = await userService.getAllUsers(req);

    if (!users.length) {
      return res.status(404).json({ message: "Users not found" });
    }
    return res.status(200).json(users);
  } catch (err) {
    logger.error(
      `Method:${req.method} Endpoint:${req.originalUrl} message:${err.message}, stack trace:${err.stack}`
    );
  }
};
