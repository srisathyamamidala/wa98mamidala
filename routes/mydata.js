var express = require('express');
var router = express.Router();
var abcd=0;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'sri sathya mamidala' });
});

module.exports = router;