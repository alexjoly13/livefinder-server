const express = require("express");
const router = express.Router();

router.post("/generic", (req, res, next) => {
  const item = req.body;
  console.log(item);
});

module.exports = router;
