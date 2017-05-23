const fs = require("fs");
let path = process.argv[2];
let buffer = fs.readFileSync(path);
let string = buffer.toString();
let array = string.split("\n");
console.log(array.length -1);
