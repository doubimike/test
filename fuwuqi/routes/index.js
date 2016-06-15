var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/tap', function(req, res) {
    res.render('tapEvent', { title: 'Express' });
});

module.exports = router;
