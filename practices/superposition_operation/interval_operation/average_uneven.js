'use strict';

function average_uneven(collection) {

  //在这里写入代码
  var temp = [];
  for (var index of collection){
    if (index % 2 != 0){
      temp.push(index);
    }
  }
  var result = temp.reduce((a,b) => a+b);
  return Math.round(result/temp.length);
}

module.exports = average_uneven;
