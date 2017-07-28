'use strict';

function hybrid_operation(collection) {
  //在这里写入代码
  var temp = [];
  var result;
  temp = collection.map(function (item) {
    return item * 3 + 2;
  });
  result = temp.reduce((a,b) => a+b);
  return result;
}

module.exports = hybrid_operation;

