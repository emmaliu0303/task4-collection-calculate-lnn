'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  var result = collection.reduce((a,b) => a>b?a:b);
  return result;
}

module.exports = collect_max_number;
