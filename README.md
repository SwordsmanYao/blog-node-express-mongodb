# blog-node-express-mongodb

## 目录结构
```
/
├── db              //数据库存储路径
├── models          //数据库模型文件目录
├── node_modules    //node第三方模块目录
├── public          //静态文件目录（css、js、img...）
├── routers         //路由文件目录
├── schemas         //数据库结构文件（schema）目录
├── views           //模板视图文件目录（html）
├── .gitignore      //git忽略的文件（不提交）
├── app.js          //应用入口文件
└── package.json
```
## 安装
1. npm install
2. 安装 mongodb
3. 运行数据库： D:\MongoDB\Server\3.4\bin>mongod --dbpath=E:\study\gitpro\blog-node-express-mongodb\db --port=27017
4. 安装 robomongo （数据库客户端）