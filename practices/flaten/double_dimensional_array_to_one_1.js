'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var result = [];
  function reverse(collection) {
    for (var i = 0; i < collection.length; i++){
      if (Array.isArray(collection[i])){
        reverse(collection[i]);
      }else {
        result.push(collection[i]);
      }
    }
  }
  reverse(collection);
  return result;
}

module.exports = double_to_one;
