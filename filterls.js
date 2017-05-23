const fs = require("fs");
let path = process.argv[2];
let extension = "." + process.argv[3];
function readDirectory(){
  fs.readdir(path, function doneReading(err, list){
    for(let i = 0; i < list.length; i++){
      if(list[i].includes(extension)){
        console.log(list[i]);
      }
    }
});
}
readDirectory();
