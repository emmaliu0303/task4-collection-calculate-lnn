'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var result = [];
  var collection = ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  if (number_a <= number_b){
    for (var i = number_a; i <= number_b; i++){
      var m = Math.floor(i / 26);
      var n = i % 26;
      if (i % 26 == 0){
        m = m - 1;
        n = 26;
      }
      result.push(collection[m]+collection[n]);


    }
  }else if (number_a >= number_b){
    for (var i = number_a; i >= number_b; i--){
      var m = Math.floor(i / 26);
      var n = i % 26;
      if (i % 26 == 0){
        m = m - 1;
        n = 26;
      }
      result.push(collection[m]+collection[n]);
    }
  }
  return result;
}

module.exports = get_letter_interval_2;

