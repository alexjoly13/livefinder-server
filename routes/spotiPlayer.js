const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/spotiPlayer", (req, res, next) => {
  console.log("Hello World");
  const url =
    "https://api.spotify.com/v1/me/top/artists?limit=5&time_range=short_term";
  const accessToken = "Bearer " + req.user.spotifyAccesToken;
  const apiKey = process.env.SONGKICK_API_KEY;

  axios.get(url, { headers: { Authorization: accessToken } }).then(response => {
    // console.log(response.data);
    const artistIds = [];
    response.data.items.forEach(oneArtist => {
      artistIds.push(oneArtist.id);
    });
    const newRequest = artistIds.map(oneId => {
      axios
        .get(`https://api.spotify.com/v1/artists/${oneId}/related-artists`, {
          headers: { Authorization: accessToken }
        })
        .then(response => {
          res.json(response.data);
        });
    });
  });
});

module.exports = router;
