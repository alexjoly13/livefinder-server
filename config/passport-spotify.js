const SpotifyStrategy = require("passport-spotify").Strategy;
const passport = require("passport");
const User = require("../models/user-model.js");
const uuidv1 = require("uuid/v1");

passport.use(
  new SpotifyStrategy(
    {
      clientID: process.env.SPOTIFY_ID,
      clientSecret: process.env.SPOTIFY_SECRET,
      callbackURL: "http://localhost:8888/auth/spotify/callback",
      passReqToCallback: true
    },
    function(req, accessToken, refreshToken, profile, done) {
      const loginToken = uuidv1();
      req.session.returnTo = `http://localhost:3000/connected/${loginToken}`;

      User.findOneAndUpdate(
        { spotifyId: profile.id },
        { $set: { loginToken } },
        { new: true }
      )
        .then(userDoc => {
          if (userDoc) {
            done(null, userDoc);
            return;
          }

          User.create({ spotifyId: profile.id, loginToken })
            .then(userDoc => {
              done(null, userDoc);
            })
            .catch(err => done(err));
        })
        .catch(error => {
          done(error);
        });
    }
  )
);
