'use strict';
function one_add_next_multiply_three(collection){
  //return [12,24,36,48,60,72,84,96,108,120];
  var result = [];
  var i = 0;
  var j = 0
  for (i = 0,j = i + 1; i < collection.length,j < collection.length; i++,j++){

    var sum = (collection[i] + collection[j]) * 3;
    result.push(sum);

  }
  return result;
}
module.exports = one_add_next_multiply_three;
