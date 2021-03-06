/**
 * 启动入口文件
 */

var express = require('express');

//加载 html 模板引擎
var swig = require('swig');

//加载数据库模块
var mongoose = require('mongoose');

//加载 body-parser ,用来处理 post 过来的数据
var bodyParser = require('body-parser');

//创建 app 应用
var app = express();


//配置应用模板
//文件后缀名为 html 的文件使用 swig.renderFile 来处理
app.engine('html', swig.renderFile);

//设置模板文件存放目录，第一个参数必须是 'views' ，第二个参数问存放目录
app.set('views', './views');

//注册所使用的模板引擎，第一个参数必须是 'view engine' ，第二个参数是 app.engine 中定义的模板引擎名称
app.set('view engine', 'html');


//开发环境设置 swig 不缓存页面
swig.setDefaults({cache: false});


//设置静态文件托管
//当用户访问 url 以 /public 开始的，直接返回 public 文件夹下对应的文件
app.use('/public', express.static(__dirname + '/public'));

//body-parser 设置，req对象中就会增加一个 body 对象（保存的是请求的参数）
app.use(bodyParser.urlencoded({extended:true}));



//分模块儿路由
//后台管理模块
app.use('/admin', require('./routers/admin'));

//api 接口模块
app.use('/api', require('./routers/api'));

//前台展示模块
app.use('/', require('./routers/main'));


mongoose.connect('mongodb://localhost:27017/blog',function(err){
    if(err){
        console.log('数据库连接失败');
    }else{
        console.log('数据库连接成功');
        //数据库连接成功后开始监听应用端口
        app.listen(8081);
    }
});

