const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./src/routes/userRoutes");
const bodyParser = require("body-parser");
const connectToDb= require('./src/config/dbConfig')
require("dotenv").config();

if(process.env.NODE_ENV==='development' || process.env.NODE_ENV==='production'){
connectToDb();

}
// parse requests of content-type - application/json
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// CORS
app.use(cors({ credentials: true, origin: true }));
app.use(express.urlencoded({ extended: true }));

//route
app.use(router);

// health check
app.get("/", (req, res) => {
  res.send("Api Is working");
});

app.listen(process.env.PORT || 6000, function () {
  console.log(
    `============= Our server has been started on ${process.env.PORT}====================`
  );
});

module.exports = app