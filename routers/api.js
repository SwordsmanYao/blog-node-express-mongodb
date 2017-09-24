/**
 * API 接口路由
 */


var express = require('express');

var router = express.Router();


router.get('/user',function (req, res, next) {
    res.send('API-user');
});

module.exports = router;