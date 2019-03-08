function getLocationFromReq(req, url) {
  let location = "clientip";

  if (req.ip !== "::1") {
    const index = req.ip.search(/\d/);
    const ipAddress = req.ip.slice(index);
    location = `ip:${ipAddress}`;
  }

  return location;
}

module.exports = getLocationFromReq;
