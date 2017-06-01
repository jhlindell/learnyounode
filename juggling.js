const http = require("http");
const bl = require("bl");
let url1 = process.argv[2];
let url2 = process.argv[3];
let url3 = process.argv[4];
let p1 = new Promise((resolve, reject) => {
  http.get(url1, function(response){
    response.pipe(bl(function(err,data){
      if(err){
        reject(err);
      } else {
        let string = data.toString();
        resolve(string);
      }
    }));
  });
});

let p2 = new Promise((resolve, reject) => {
  http.get(url2, function(response){
    response.pipe(bl(function(err,data){
      if(err){
        reject(err);
      } else {
        let string = data.toString();
        resolve(string);
      }
    }));
  });
});

let p3 = new Promise((resolve, reject) => {
  http.get(url3, function(response){
    response.pipe(bl(function(err,data){
      if(err){
        reject(err);
      } else {
        let string = data.toString();
        resolve(string);
      }
    }));
  });
});

Promise.all([p1, p2, p3]).then(values => {
  for(let i = 0; i < values.length; i++){
    console.log(values[i]);
  }
});
