const express = require('express');

const Specie = require('./Specie.js');

const router = express.Router();

// add endpoints here
router.route('/').get((req, res) => {
  Specie.find({})
    .then(species => {
      res.status(200).json(species);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
module.exports = router;
