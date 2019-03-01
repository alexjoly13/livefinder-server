const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/userInfo", (req, res, next) => {
  console.log("it works");

  const url = "https://api.spotify.com/v1/me/top/artists?limit=5";
  const accessToken = "Bearer " + req.user.spotifyAccesToken;

  axios
    .get(url, { headers: { Authorization: accessToken } })
    .then(response => {
      // const topArtistArray = this.state.topArtists;
      // topArtistArray.push(response.data.items);
      res.json(response.data);
      console.log(response.data);
    })
    .catch(err => {
      console.log("wtf--------", err.response.data);
      next(err);
    });
});

module.exports = router;
