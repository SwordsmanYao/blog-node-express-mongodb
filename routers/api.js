/**
 * API 接口路由
 */


var express = require('express');

var router = express.Router();

var User = require('../models/User');

//统一返回格式
var responseData;

router.use(function(req, res, next){
    responseData = {
        code:0,
        message:''
    }

    next();
});


/**
 * 用户注册接口
 */
router.post('/user/register',function (req, res, next) {

    //设置 body-parser 后，req.body 对象中保存的是请求参数
    console.log(req.body);

    var body = req.body;


    if(body.username == ''){
        responseData.code = -1;
        responseData.message = '用户名不能为空';
        res.json(responseData);
        return;
    }
    if(body.password == ''){
        responseData.code = -1;
        responseData.message = '密码不能为空';
        res.json(responseData);
        return;
    }
    if(body.password != body.repassword){
        responseData.code = -1;
        responseData.message = '密码不一致';
        res.json(responseData);
        return;
    }

    User.findOne({//验证用户名是否存在
        username:body.username
    }).then(function(userInfo){

        if(userInfo){
            console.log('已存在用户：' + userInfo);
            responseData.code = -1;
            responseData.message = '用户名已注册';
            res.json(responseData);
            return;
        }

        var user = new User({
            username: body.username,
            password: body.password
        });

        return user.save();
    }).then(function (newUserInfo) {
        console.log('注册新用户：'+ newUserInfo);
        responseData.message = '注册成功';
        res.json(responseData);

    });



});

module.exports = router;