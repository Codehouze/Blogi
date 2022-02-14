const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose.connect(process.env.DB_URI, (err) => {
    if (err)  logger.error(
      `Message:Database connection error,${err.message}`
    );
    logger.info(
      `Database connection successful`
    );
  });
});
module.exports = connectToDb;
