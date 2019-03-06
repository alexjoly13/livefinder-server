const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/test", (req, res, next) => {
  const kickApi = process.env.SONGKICK_API_KEY;
  const lastApi = process.env.LASTFM_API_KEY;
  const location = req.ip === "::1" ? "clientip" : req.ip;
  const artistName = [];
  const dataArray = [];

  const url =
    "https://api.spotify.com/v1/me/top/artists?limit=20&time_range=short_term";
  const accessToken = "Bearer " + req.user.spotifyAccesToken;
  const spotifyData = [];
  const spotifyRequest = axios
    .get(url, { headers: { Authorization: accessToken } })
    .then(response => {
      spotifyData.push(response.data.items);
      // console.log(spotifyData);
      response.data.items.forEach(oneArtist => {
        artistName.push(oneArtist.name);
        // console.log(oneArtist.name);
      });
      // console.log(artistName);
      const allEvents = artistName.map(oneQuery => {
        const location = req.ip === "::1" ? "clientip" : req.ip;
        const name = encodeURIComponent(oneQuery);
        const url = `https://api.songkick.com/api/3.0/events.json?apikey=${kickApi}&artist_name=${name}&location=${location}`;

        return axios.get(url).catch(err => {
          next(err);
        });
      });
      const allConcerts = [];
      Promise.all(allEvents)
        .then(resultArray => {
          resultArray.forEach(oneResponse => {
            // console.log(oneResponse.data.resultsPage.results.event);
            if (oneResponse.data.resultsPage.totalEntries !== 0) {
              allConcerts.push(oneResponse.data.resultsPage.results.event);
            }
          });
          // console.log(allConcerts);
          // console.log(artistName);
          const artistInfos = artistName.map(infoQuery => {
            const name = encodeURIComponent(infoQuery);
            const url = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=${lastApi}&format=json`;
            return axios.get(url).catch(err => {
              next(err);
            });
          });
          const allArtistsInfo = [];
          Promise.all(artistInfos)
            .then(infoArray => {
              infoArray.forEach(oneData => {
                // console.log(oneData.data);
                allArtistsInfo.push(oneData.data);
              });
              // allArtistsInfo.push(infoArray);

              // console.log(allConcerts);
              // console.log(spotifyData);

              Promise.all([allConcerts, allArtistsInfo, spotifyData]).then(
                function(bigArray) {
                  // console.log(bigArray);
                  bigArray.forEach(oneData => {
                    // console.log(oneData);

                    oneData.forEach(deeper => {
                      console.log(deeper);
                      dataArray.push(deeper);
                    });
                    res.json(dataArray);
                  });
                }
              );
            })
            .catch(err => next(err));

          // res.json(tempArray);
          // console.log(tempArray);
        })
        .catch(err => {
          next(err);
        });
    })
    .catch(err => next(err));

  // Promise.all([getArtistConcert(), getArtistInfos()])
  //   .then(function(bigArray) {
  //     bigArray.forEach(oneData => {
  //       // console.log(oneData.data);
  //       dataArray.push(oneData.data);
  //     });
  //     // console.log(dataArray);
  //     // console.log(bigArray);
  //     // JSON.stringify(bigArray);
  //     res.json(dataArray);
  //   })
  //   .catch(err => next(err));
});

module.exports = router;
