const express = require("express");
const router = express.Router();
const passport = require("passport");

const User = require("../models/user-model.js");

// router.get("/", function(req, res) {
//   res.json("you did it");
// });

router.get(
  "/auth/spotify",
  passport.authenticate("spotify", {
    scope: ["user-read-email", "user-read-private", "user-top-read"],
    showDialog: true,
  }),
  function (req, res) {}
);

router.get(
  "/auth/spotify/callback",
  passport.authenticate("spotify", {
    failureRedirect: process.env.FRONT_URL,
    successReturnToOrRedirect: `${process.env.FRONT_URL}/connected`,
  })
);

router.post("/auth/token-login", (req, res, next) => {
  const { loginToken } = req.body;
  User.findOneAndUpdate(
    { loginToken: { $eq: loginToken } },
    { $unset: { loginToken: "" } },
    { new: true }
  )
    .then((userDoc) => {
      if (!userDoc) {
        next(new Error(`No user with loginToken ${loginToken}`));
        return;
      }

      req.logIn(userDoc, () => {
        userDoc.spotifyAccesToken = undefined;
        userDoc.spotifyRefreshToken = undefined;
        res.json(userDoc);
      });
    })
    .catch((err) => next(err));
});

router.get("/logout", (req, res, next) => {
  // req.logOut() is a Passport method that removes the USER ID from the session
  req.logOut();

  res.json({ message: "You are logged out !" });
});

module.exports = router;
