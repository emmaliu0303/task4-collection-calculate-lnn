'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  let A = new Set(collection_a);
  let B = new Set(collection_b);
  var result = [];
  result = new Set([...B].filter(x => A.has(x)));
  return (Array.from(result));
}

module.exports = get_intersection;
