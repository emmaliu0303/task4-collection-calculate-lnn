'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  let A = new Set(collection_a);
  let B = new Set(collection_b);
  var result = [];
  return Array.from(new Set([...A].filter(x => !B.has(x))));
}

module.exports = choose_no_common_elements;
