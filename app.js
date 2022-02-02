const express = require("express");
const app = express();
const PORT = 8080;
const redis = require("redis");
const axios = require("axios");
var cors = require("cors");
const client = redis.createClient(process.env.REDIS_PORT, "127.0.0.1");

// parse requests of content-type - application/json
app.use(express.json());
app.use(cors({ credentials: true, origin: true }));

// git oAuth credentials
const CLIENT_ID = process.env.GitClientID;
const CLIENT_SECRET = process.env.GitClientSecret;
const GITHUB_URL = "https://localhost:3001/google/callback";

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
  client.on("connect", function () {
    console.log("Connected!");
  });
  res.send({ message: "Welcome to Codehouze application." });
});

// simple route
// app.post("/", (req, res) => {
//   res.send({ message: "Welcome to Codehouze application." });
// });

require("./routes/userRoutes")(app);
require("./routes/questionRoutes")(app);
require("./routes/commentRoutes")(app);

app.get("/oauth/redirect", async (req, res) => {
  try {
    const response = await axios({
      method: "POST",
      url: `${GITHUB_URL}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${req.query.code}`,
      headers: {
        Accept: "application/json",
      },
    });
    if (!response) {
      return res
        .status(400)
        .json({ success: false, message: "response not found" });
    }

    app.listen(PORT || 6000, function () {
      console.log(
        `============= Our server has been started on ${PORT}====================`
      );
    });

    return res
      .redirect(
        `http://localhost:3000?access_token=${response.data.access_token}`
      )
      .status(200)
      .json({ success: true, message: "success", data: response });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: err.message || "Some error occurred while creating the User.",
    });
  }
});
