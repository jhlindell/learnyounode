const fs = require("fs");
let path = process.argv[2];
function fileRead(){
  fs.readFile(path, function doneReading(err, fileContents) {
    let buffer = fileContents;
    let string = buffer.toString();
    let array = string.split("\n");
    console.log(array.length - 1);
  })
}
fileRead();
