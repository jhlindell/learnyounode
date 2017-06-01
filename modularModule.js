const fs = require("fs");
module.exports= function(path, filter, callback){
  filter = "." + filter;
  fs.readdir(path, function(err, list){
    if(err){
      return callback(err);
    }
    let returnArray = [];
    for(let i = 0; i < list.length; i++){
      if(list[i].includes(filter)){
        returnArray.push(list[i]);
      }
    }
    callback(null, returnArray);
  });
}
