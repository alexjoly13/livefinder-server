const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/userInfo", (req, res, next) => {
  const url =
    "https://api.spotify.com/v1/me/top/artists?limit=20&time_range=short_term";
  const accessToken = "Bearer " + req.user.spotifyAccesToken;
  const apiKey = process.env.SONGKICK_API_KEY;

  axios
    .get(url, { headers: { Authorization: accessToken } })

    .then(response => {
      const artistName = [];
      response.data.items.forEach(oneArtist => {
        artistName.push(oneArtist.name);
      });

      const tempArray = [];
      const location = req.ip === "::1" ? "clientip" : req.ip;

      const eventIndex = artistName.map(oneQuery => {
        const name = encodeURIComponent(oneQuery);
        const url = `https://api.songkick.com/api/3.0/events.json?apikey=${apiKey}&artist_name=${name}&location=${location}`;
        return axios.get(url);
      });

      Promise.all(eventIndex)
        .then(resultArray => {
          resultArray.forEach(oneResponse => {
            if (oneResponse.data.resultsPage.totalEntries !== 0) {
              tempArray.push(oneResponse.data);
            }
          });
          res.json(tempArray);
        })
        .catch(err => next(err));
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
