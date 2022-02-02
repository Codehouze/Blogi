module.exports = (app) => {
  const commentCtrl = require("../controller/commentCtrl");
  const authorization = require("../utils/authenticate");

  const router = require("express").Router();

  // Create a new User
  router.post("/", authorization,commentCtrl.create);

  app.use("/api/comment", router);
};
