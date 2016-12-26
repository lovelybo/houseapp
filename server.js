/**
 * Created by Administrator on 2016/12/26.
 */
//引入 path 内置模块
var path = require('path');
//引入 express 依赖模块，用来启动静态服务器
var express = require('express');
//引入转发请求插件
var proxy = require('http-proxy-middleware');

//实例 express
var app = express();
//拼接物理路径，用来指定虚拟路径的访问（静态页面文件）
var viewsPath = path.join(__dirname, 'views');
console.log(viewsPath);
//指定访问 页面 的路径
app.use('/', express.static(viewsPath));

// 拼接物理路径，用来指定虚拟路径的访问（静态资源文件）
var publicPath = path.join(__dirname, 'public');
//指定访问静态资源文件的路径
app.use('/public', express.static(publicPath));
