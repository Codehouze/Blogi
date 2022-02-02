const express = require("express");
const axios = require("axios");
var cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const app = express();
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();

app.use(cors({ credentials: true, origin: true }));

// Middleware
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());

app.use(passport.session());

const CLIENT_ID = process.env.ClientID;
const CLIENT_SECRET = process.env.ClientSecret;
const REDIRECT_URL = "http://localhost:3001/auth/google/callback";


passport.serializeUser((user, done) => {
  console.log(`\n--------> Serialize User:`);
  console.log(user);
  done(null, user);
});

passport.deserializeUser((user, done) => {
  console.log("\n--------- Deserialized User:");
  console.log(user);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      callbackURL: REDIRECT_URL,
      passReqToCallback: true,
    },
      (request, accessToken, refreshToken, profile, done) => {
            return done(null,profile)
      }
    )
)
//Start the NODE JS server
app.listen(3001, () => console.log(`Server started on port 3001...`));

//console.log() values of "req.session" and "req.user" so we can see what is happening during Google Authentication
let count = 1;
showLogs = (req, res, next) => {
  console.log("\n==============================");
  console.log(`------------>  ${count++}`);

  console.log(`\n req.session.passport -------> `);
  console.log(req.session.passport);

  console.log(`\n req.user -------> `);
  console.log(req.user);

  console.log("\n Session and Cookie");
  console.log(`req.session.id -------> ${req.session.id}`);
  console.log(`req.session.cookie -------> `);
  console.log(req.session.cookie);

  console.log("===========================================\n");

  next();
};

app.use(showLogs);

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  })
);

//Define the Login Route
app.get("/login", (req, res) => {
  res.render("login.ejs");
});

//Use the req.isAuthenticated() function to check if user is Authenticated
checkAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
};

//Define the Protected Route, by using the "checkAuthenticated" function defined above as middleware
app.get("/dashboard", checkAuthenticated, (req, res) => {
  res.render("dashboard.ejs", { name: req.user.displayName });
});

//Define the Logout
app.post("/logout", (req, res) => {
  req.logOut();
  res.redirect("/login");
  console.log(`-------> User Logged out`);
});
