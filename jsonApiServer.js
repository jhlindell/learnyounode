const http = require('http');
const url = require('url');
var server = http.createServer(function(req, res) {
  let query = url.parse(req.url, true);
  let date = new Date(query.query.iso);
  if(req.method === 'GET' && query.pathname === '/api/parsetime'){
    let obj = {};
    obj.hour = Number(date.getHours());
    obj.minute = Number(date.getMinutes());
    obj.second = Number(date.getSeconds());
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(obj));
  }
  if(req.method === 'GET' && query.pathname === '/api/unixtime'){
    let unixTime = new Date(query.query.iso).getTime();
    let obj = {};
    obj.unixtime = unixTime;
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(obj));
  }
});
server.listen(process.argv[2]);
