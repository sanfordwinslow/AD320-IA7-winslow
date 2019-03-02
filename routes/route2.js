var express = require('express');
var router = express.Router();
var colors = require("../colors.json");



/* GET home page. */
router.get('/all', function(req, res, next) {

  res.send('colors');
});

module.exports = router;
