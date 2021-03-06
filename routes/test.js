const express = require("express");
const router = express.Router();
const axios = require("axios");

const getLocationFromReq = require("../lib/get-location-from-req.js");

router.get("/test", (req, res, next) => {
  const url =
    "https://api.spotify.com/v1/me/top/artists?limit=20&time_range=short_term";
  const accessToken = "Bearer " + req.user.spotifyAccesToken;
  const apiKey = process.env.SONGKICK_API_KEY;

  axios
    .get(url, { headers: { Authorization: accessToken } })

    .then(response => {
      const artistName = [];
      const tempArray = [];
      // res.json(response);
      // console.log(response);
      tempArray.push(response.data.items);
      response.data.items.forEach(oneArtist => {
        artistName.push(oneArtist.name);
      });

      const location = getLocationFromReq(req);

      const eventIndex = artistName.map(oneQuery => {
        const name = encodeURIComponent(oneQuery);
        const url = `https://api.songkick.com/api/3.0/events.json?apikey=${apiKey}&artist_name=${name}&location=${location}`;
        // console.log(url);
        return axios.get(url);
      });

      Promise.all(eventIndex)
        .then(resultArray => {
          resultArray.forEach(oneResponse => {
            if (oneResponse.data.resultsPage.totalEntries !== 0) {
              tempArray.push(oneResponse.data.resultsPage.results);
            }
          });

          res.json(tempArray);
          // console.log(tempArray);
        })
        .catch(err => next(err));
    })
    .catch(err => {
      next(err);
    });

  // const kickApi = process.env.SONGKICK_API_KEY;
  // const lastApi = process.env.LASTFM_API_KEY;
  // const location = getLocationFromReq(req);
  // const artistName = [];
  // const dataArray = [];

  // const url =
  //   "https://api.spotify.com/v1/me/top/artists?limit=20&time_range=short_term";
  // const accessToken = "Bearer " + req.user.spotifyAccesToken;
  // const spotifyData = [];
  // const spotifyRequest = axios
  //   .get(url, { headers: { Authorization: accessToken } })
  //   .then(response => {
  //     spotifyData.push(response.data.items);
  //     // console.log(spotifyData);
  //     response.data.items.forEach(oneArtist => {
  //       artistName.push(oneArtist.name);
  //       // console.log(oneArtist.name);
  //     });
  //     // console.log(artistName);
  //     const allEvents = artistName.map(oneQuery => {
  //       const location = getLocationFromReq(req);
  //       const name = encodeURIComponent(oneQuery);
  //       const url = `https://api.songkick.com/api/3.0/events.json?apikey=${kickApi}&artist_name=${name}&location=${location}`;

  //       return axios.get(url).catch(err => {
  //         next(err);
  //       });
  //     });
  //     const allConcerts = [];
  //     Promise.all(allEvents)
  //       .then(resultArray => {
  //         resultArray.forEach(oneResponse => {
  //           // console.log(oneResponse.data.resultsPage.results.event);
  //           if (oneResponse.data.resultsPage.totalEntries !== 0) {
  //             allConcerts.push(oneResponse.data.resultsPage.results.event);
  //           }
  //         });
  //         // console.log(allConcerts);
  //         // console.log(artistName);
  //         const artistInfos = artistName.map(infoQuery => {
  //           const name = encodeURIComponent(infoQuery);
  //           const url = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=${lastApi}&format=json`;
  //           return axios.get(url).catch(err => {
  //             next(err);
  //           });
  //         });
  //         const allArtistsInfo = [];
  //         Promise.all(artistInfos)
  //           .then(infoArray => {
  //             infoArray.forEach(oneData => {
  //               // console.log(oneData.data);
  //               allArtistsInfo.push(oneData.data);
  //             });
  //             // allArtistsInfo.push(infoArray);

  //             // console.log(allConcerts);
  //             // console.log(spotifyData);

  //             Promise.all([allArtistsInfo, allConcerts, spotifyData]).then(
  //               function(bigArray) {
  //                 // console.log(bigArray);
  //                 bigArray.forEach(oneData => {
  //                   // console.log(oneData);

  //                   oneData.forEach(deeper => {
  //                     // console.log(deeper);
  //                     dataArray.push(deeper);
  //                   });
  //                   res.json(dataArray);
  //                 });
  //               }
  //             );
  //           })
  //           .catch(err => next(err));

  //         // res.json(tempArray);
  //         // console.log(tempArray);
  //       })
  //       .catch(err => {
  //         next(err);
  //       });
  //   })
  //   .catch(err => next(err));
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
