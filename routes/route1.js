var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('route1', { title: 'route1' });
});




module.exports = router;
