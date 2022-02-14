let mongoose = require("mongoose");
const logger = require("../../logger/index");
require("dotenv").config();

const connectToDb = () => {
  mongoose.connect(process.env.URI, (err) => {
    if (err)  logger.error(
      `Message:Database connection error,${err.message}`
    );
    logger.info(
      `Database connection successful`
    );
  });
};
module.exports = connectToDb;
