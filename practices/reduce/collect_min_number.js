'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  var result = collection.reduce((a,b) => a>b?b:a);
  return result;
}

module.exports = collect_min_number;

