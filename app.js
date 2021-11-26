const express = require("express");
const app = express();
const PORT = 5000;

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./src/model/index");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

  })

  .then(() => {
    console.log(
      "============= Connected to the database ====================="
    );
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.send({ message: "Welcome to Codehouze application." });
});

// simple route
// app.post("/", (req, res) => {
//   res.send({ message: "Welcome to Codehouze application." });
// });

require("./routes/userRoutes")(app);
require("./routes/questionRoutes")(app);
// require("./routes/answerRoutes")(app);


app.listen(PORT, function () {
  console.log(
    `============= Our server has been started on ${PORT}====================`
  );
});
