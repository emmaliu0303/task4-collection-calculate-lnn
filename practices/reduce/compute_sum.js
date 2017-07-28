'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  var result = collection.reduce((a,b) => a+b);
  return result;
}

module.exports = calculate_elements_sum;

