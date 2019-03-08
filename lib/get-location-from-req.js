function getLocationFromReq(req, url) {
  console.log(`IP ${url} getting location... ${req.ip}`);
  let location = "clientip";

  if (req.ip !== "::1") {
    const index = req.ip.search(/\d/);
    const ipAddress = req.ip.slice(index);
    location = `ip:${ipAddress}`;
  }

  console.log("IP  ---->", req.ip, "---->", location);
  return location;
}

module.exports = getLocationFromReq;
