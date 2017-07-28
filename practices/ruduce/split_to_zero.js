'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var result = [];
  var temp = number;
  while (number >= 0 ){
    result.push(Math.round(number * 100)/100);
    number -= interval;
  }
  if (Math.round(temp *10) % 2 == 0 ){
    return result;
  }else {
    result.push(number) ;
    return result;
  }

}

module.exports = spilt_to_zero;
