const userCtrl = require("../controller/userCtrl.js");
const validator = require("../../middleware/validate");
const { validateRequest } = require("../../middleware/request-validator");
const authorization = require("../../utils/authenticate");

const router = require("express").Router();

// Create a new User
router.post(
  "/api/users/",
  validator.signUpValidator,
  validateRequest,
  userCtrl.create
);

// Login a user
router.post(
  "/api/users/login",
  validator.signInValidator,
  validateRequest,
  userCtrl.login
);
// Login a user
router.get("/api/users",authorization, userCtrl.getAll);

module.exports = router;
