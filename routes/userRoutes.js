module.exports = app => {
    const userCtrl = require("../controller/userCtrl.js");
    const authorization = require("../utils/authenticate");
  
  const router = require("express").Router();
  
    // Create a new User
    router.post("/", userCtrl.create);
    
    // Login a user
    router.post("/login",userCtrl.login);

    app.use("/api/user", router);
  
  };