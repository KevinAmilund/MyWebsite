let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next){
    res.render('index.html'); 
});
router.get('/MyPage', function(req, res, next){
    res.render('MyPage.html'); 
});

module.exports = router;