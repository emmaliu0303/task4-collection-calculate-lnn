'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var A = new Set(collection_a);
  var B = new Set(collection_b);
  var result = [];
  result = Array.from(new Set([...A,...B]));
  return result;
}

module.exports = get_union;

