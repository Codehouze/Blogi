const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");

 const connectToDb = (async () => {
  const mongod = new MongoMemoryServer();
  await mongod.start();
  const mongoUri = mongod.getUri();
  
  await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  });
});
module.exports = connectToDb;
