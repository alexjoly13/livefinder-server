const express = require("express");
const router = express.Router();

const User = require("../models/user-model.js");

// GET - read
// POST - create
// PUT/PATCH - update
// DELETE - deleting

router.delete("/delete-concert/:concertId", (req, res, next) => {
  let { concertId } = req.params;
  concertId = Number(concertId);

  User.findByIdAndUpdate(
    req.user._id,
    { $pull: { concert: { id: concertId } } },
    { new: true, runValidators: true }
  )
    .then(userDoc => res.json(userDoc))
    .catch(err => next(err));
});

module.exports = router;
