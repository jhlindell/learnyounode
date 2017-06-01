const mod = require("./modularModule");
let path = process.argv[2];
let extension = process.argv[3];

function processData(err, data){
  if(err){
    console.log(err);
  } else {
    for(let i = 0; i < data.length; i++){
      console.log(data[i]);
    }
  }
}

mod(path, extension, processData);
