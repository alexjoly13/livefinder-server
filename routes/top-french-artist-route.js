const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/top-french", (req, res, next) => {
  console.log("new page fro French speaking artist!");
  const url =
    "https://api.spotify.com/v1/browse/new-releases?country=FR&limit=10";
  const accessToken = "Bearer " + req.user.spotifyAccesToken;

  axios
    .get(url, { headers: { Authorization: accessToken } })
    .then(response => {
      res.json(response.data);
      console.log(response.data);
    })
    .catch(err => {
      console.log("wtf--------", err.response.data);
      next(err);
    });
});

module.exports = router;
