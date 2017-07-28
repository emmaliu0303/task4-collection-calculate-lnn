'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var result = [];
  for (var num in collection){
    if (collection[num] % 2 == 0){
      result.push(collection[num]);
    }
  }
  return result;
}

module.exports = collect_all_even;
