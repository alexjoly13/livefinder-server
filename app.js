require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const passport = require("passport");

require("./config/passport-setup.js");

mongoose
  .connect("mongodb://localhost/project3-server", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"]
  })
);
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);
app.use(passport.initialize());
app.use(passport.session());

const auth = require("./routes/auth-route.js");
app.use("/", auth);

const userInfo = require("./routes/spotify-request-route.js");
app.use("/", userInfo);

const topFrenchPage = require("./routes/top-french-artist-route.js");
app.use("/", topFrenchPage);

const topArtistsList = require("./routes/top-artists-list-route.js");
app.use("/", topArtistsList);

const relatedArtists = require("./routes/related-artists-concerts-route.js");
app.use("/", relatedArtists);

const concertInfo = require("./routes/concert-route.js");
app.use("/", concertInfo);

const genericHomePage = require("./routes/generic-homepage.js");
app.use("/", genericHomePage);

const nextConcertsParis = require("./routes/generic-concerts-paris.js");
app.use("/", nextConcertsParis);

module.exports = app;
