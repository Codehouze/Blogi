module.exports = (app) => {
  const questionCtrl = require("../controller/questionsCtrl")

  const router = require("express").Router();

  // Create a new User
  router.post("/", questionCtrl.create);

  app.use("/api/question", router);
};
