const http = require("http");
let url = process.argv[2];
const bl = require("bl");
http.get(url, function(response){
  response.pipe(bl(function(err,data){
    if(err){
      console.log(err);
    } else {
      let string = data.toString();
      console.log(string.length);
      console.log(string);
    }
  }));
});
