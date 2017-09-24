/**
 * 前台展示路由
 */


var express = require('express');

var router = express.Router();


router.get('/user',function (req, res, next) {
    res.send('main-user');
});

module.exports = router;