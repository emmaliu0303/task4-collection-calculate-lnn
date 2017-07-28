'use strict';

function amount_even(collection) {

  //在这里写入代码
  var temp = [];
  for (var index of collection){
    if (index % 2 == 0){
      temp.push(index);
    }
  }
  var result = temp.reduce((a,b) => a+b);
  return result;
}

module.exports = amount_even;
