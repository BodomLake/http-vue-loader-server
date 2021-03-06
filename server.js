/**
 * 一个简单的nodejs服务器，负责输出index.html
 * 本程序主要测试 vue工程的服务端解析
 */
const http = require("http"),
  fs = require("fs"),
  path = require("path"),
  url = require("url");

var root = path.resolve();
// 创建服务器
var sever = http.createServer(function (request, response) {
  // console.log('请求的资源路径:', request.url);

  var pathname = url.parse(request.url).pathname;
  var filepath = path.join(root, pathname);

  if (request.url == '/') {
    console.log('重定向到index.html');
    filepath = path.join(root, 'index.html');
  }
  // 获取文件状态
  fs.stat(filepath, function (err, stats) {
    if (err) {
      // 发送404响应
      response.writeHead(404);
      response.end("404 Not Found.");
      console.warn('nodejs server 出错啦')
    } else {
      // 发送200响应
      response.writeHead(200);
      // response是一个writeStream对象，fs读取html后，可以用pipe方法直接写入
      fs.createReadStream(filepath).pipe(response);
    }
  });
});
sever.listen(8090);
console.log('Sever is running at http://127.0.0.1:8090/');