/**
 * 启动入口文件
 */

var express = require('express');

//加载 html 模板引擎
var swig = require('swig');

//创建 app 应用
var app = express();

//设置静态文件托管
//当用户访问 url 以 /public 开始的，直接返回 public 文件夹下对应的文件
app.use('/public', express.static(__dirname + '/public'));


//配置应用模板
//文件后缀名为 html 的文件使用 swig.renderFile 来处理
app.engine('html', swig.renderFile);

//设置模板文件存放目录，第一个参数必须是 'views' ，第二个参数问存放目录
app.set('views', './views');

//注册所使用的模板引擎，第一个参数必须是 'view engine' ，第二个参数是 app.engine 中定义的模板引擎名称
app.set('view engine', 'html');

//开发环境设置 swig 不缓存页面
swig.setDefaults({cache: false});

app.get('/',function(req, res, next){

    //模板渲染到页面
    res.render('index');
});

app.listen(8081);