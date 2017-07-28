'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var result = {};
  var A = new Set(collection);
  for (var item of A.values()){
    result[item] = 0;
  }
  for (var item of A.values()){
    var count = 0;
    for (var i = 0; i <=collection.length; i++){
      if (collection[i] == item){
        count++;
      }
    }
    result[item] = count;
  }
  return result;
}

module.exports = grouping_count;
