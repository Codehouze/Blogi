const dbConfig = require("../config/dbConfig");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.user = require("./userModel")(mongoose);
db.question=require("./questionModel")(mongoose);
db.comment=require("./commentModel")(mongoose);

module.exports = db;