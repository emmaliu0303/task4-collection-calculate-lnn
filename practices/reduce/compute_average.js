'use strict';

function compute_average(collection) {
  //在这里写入代码
  var result = collection.reduce((a,b) => a+b);
  return result/collection.length;
}

module.exports = compute_average;

