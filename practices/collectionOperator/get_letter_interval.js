'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var character = 96;
  var result = [];
  if (number_a <= number_b){
    for (var i = number_a; i <= number_b; i++){
      result.push(String.fromCharCode(character+i));
    }
  }else if (number_a >= number_b){
    for (var i = number_a; i >= number_b; i--){
      result.push(String.fromCharCode(character+i));
    }
  }
  return result;
}

module.exports = get_letter_interval;
