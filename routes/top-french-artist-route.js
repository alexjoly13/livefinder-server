const express = require("express");
const router = express.Router();
const axios = require("axios");

const getLocationFromReq = require("../lib/get-location-from-req.js");

router.get("/top-french", (req, res, next) => {
  const url =
    "https://api.spotify.com/v1/browse/new-releases?country=FR&limit=10";
  const accessToken = "Bearer " + req.user.spotifyAccesToken;

  axios
    .get(url, { headers: { Authorization: accessToken } })
    .then(response => {
      const artistName = [];
      response.data.albums.items.forEach(oneArtist => {
        artistName.push(oneArtist.artists[0].name);
      });
      const tempArray = [];
      const location = getLocationFromReq(req);
      const eventIndex = artistName.map(oneQuery => {
        const name = encodeURIComponent(oneQuery);
        const url = `https://api.songkick.com/api/3.0/events.json?apikey=j091nvHfTVMNsX7r&artist_name=${name}&location=geo:48.866667,2.333333`;
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
