const express = require("express");
const router = express.Router();
const axios = require("axios");

const User = require("../models/user-model.js");

router.get("/get-top-playlist", (req, res, next) => {
  const url = "https://api.spotify.com/v1/me/playlists?limit=5";
  const accessToken = "Bearer " + req.user.spotifyAccesToken;

  axios
    .get(url, { headers: { Authorization: accessToken } })
    .then(response => {
      res.json(response.data);
    })
    .catch(err => next(err));
});

module.exports = router;
