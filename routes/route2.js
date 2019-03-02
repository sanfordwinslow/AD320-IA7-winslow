var express = require('express');
var router = express.Router();
var object = require("../colors.json");



/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(object);
});


module.exports = router;
