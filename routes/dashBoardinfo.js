const express = require("express");
const router = express.Router();
const axios = require("axios");

const User = require("../models/user-model.js");

router.get("/dashboard-info", (req, res, next) => {
  const url = "https://api.spotify.com/v1/me/playlists?limit=5";
  const accessToken = "Bearer " + req.user.spotifyAccesToken;

  axios
    .get(url, { headers: { Authorization: accessToken } })
    .then(response => {
      res.json(response.data);
    })
    .catch(err => next(err));
});

router.post("/dashboard-info", (req, res, next) => {
  User.find;
});

// router.get("/delete-concert/:concertId", (req, res, next) => {
//   const { concertId } = req.params;

//   User.findByIdAndUpdate(
//     req.user._id,
//     { $pull: { concert: result.data.resultsPage.results.event } },
//     { runValidators: true }
//   ).catch(err => next(err));
// });

module.exports = router;
