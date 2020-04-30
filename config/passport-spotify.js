require("dotenv").config();

const SpotifyStrategy = require("passport-spotify").Strategy;
const passport = require("passport");
const User = require("../models/user-model.js");
const uuidv1 = require("uuid/v1");

passport.use(
  new SpotifyStrategy(
    {
      clientID: process.env.SPOTIFY_ID,
      clientSecret: process.env.SPOTIFY_SECRET,
      callbackURL: "https://livefinder-eu.herokuapp.com/auth/spotify/callback",
      passReqToCallback: true,
      proxy: true,
    },
    function (req, accessToken, refreshToken, profile, done) {
      const loginToken = uuidv1();
      req.session.returnTo = `https://livefinder-eu.herokuapp.com//connected/${loginToken}`;

      User.findOneAndUpdate(
        { spotifyId: profile.id },
        {
          $set: {
            loginToken,
            spotifyAccesToken: accessToken,
            spotifyRefreshToken: refreshToken,
          },
        },
        { new: true }
      )
        .then((userDoc) => {
          if (userDoc) {
            done(null, userDoc);
            return;
          }

          User.create({
            fullName: profile.displayName,
            image: profile._json.images[0].url,
            email: profile._json.email,
            spotifyId: profile.id,
            spotifyLink: profile.profileUrl,
            spotifyAccesToken: accessToken,
            spotifyRefreshToken: refreshToken,
            loginToken,
          })
            .then((userDoc) => {
              done(null, userDoc);
            })
            .catch((err) => done(err));
        })
        .catch((error) => {
          done(error);
        });
    }
  )
);
