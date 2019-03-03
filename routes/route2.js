var express = require('express');
var router = express.Router();
var object = require("../colors.json");


/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.send(object);
});*/

router.get('/all', function(req, res, next)  {
  res.send(object);
});

router.get('/:color', function(req, res, next) {
  res.send(colorName(req.params.color));
});

function colorName(colorString) {
  for(var i = 0; i < object.colors.length; i++) {
    if(object.colors[i].color === colorString) {
      return object.colors[i];
    };
  };
};

module.exports = router;
