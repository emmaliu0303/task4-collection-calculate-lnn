'use strict';
var even_asc_odd_desc = function(collection){
  var even = [];
  var odd = [];
  for (var value of collection){
    if (value % 2 == 0){
      even.push(value);
    }else {
      odd.push(value);
    }
  }
  function sortNum(a, b) {
    return a-b;
  }
  even = even.sort(sortNum);
  odd = odd.sort(sortNum).reverse();
  for (var value of odd){
    even.push(value);
  }
  return even;
};
module.exports = even_asc_odd_desc;
