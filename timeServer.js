var net = require('net');
const port = process.argv[2];
var server = net.createServer(function (socket) {
  let date = new Date();
  let dateString = date.getFullYear() + '-';
  let month = date.getMonth() + 1;
  if(month <10){
    dateString += '0' + month + '-';
  } else {
    dateString += month + '-';
  }
  let day = date.getDate();
  if(day < 10){
    dateString += '0' + day + ' ';
  } else {
    dateString += day + ' ';
  }
  let hours = date.getHours();
  if(hours < 10){
    dateString += '0' + hours + ':';
  } else {
    dateString += hours + ':';
  }
  let minutes = date.getMinutes();
  if(minutes < 10){
    dateString += '0' + minutes + '\n';
  } else {
    dateString += minutes + '\n';
  }
  socket.end(dateString);
});
server.listen(port)
