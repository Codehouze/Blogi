const User = require("../model/UserModel");
const bcrypt = require("bcrypt");
const createToken = require("../../utils/createToken");
const jwt = require("jsonwebtoken");

require("dotenv").config();

class UserService {
  async create(req) {
    const { firstName, lastName, email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      return { success: false, message: "Account already exist", data: {} };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const payLoad = {
      firstName,
      lastName,
      email,
      password: hashedPassword,
    };
    const newUser = await User.create(payLoad);
    delete newUser.password;

    return {
      success: true,
      message: `User Created successfully`,
      data: newUser,
    };
  }

  async login(req) {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return { success: false, message: "Incorrect email or password",data:{} };
    }
    const match = bcrypt.compareSync(password, user.password);
    if (!match) {
      return { success: false, message: "Incorrect email or password",data:{} };
    }

    const token = createToken({id:user._id}, "2d");

    return { success: true, message: "login successfully", data:token};
  }

  async getAllUsers() {
    const users = await User.find({}, { password: 0 });
    return users;
  }

 
}
module.exports = UserService;
