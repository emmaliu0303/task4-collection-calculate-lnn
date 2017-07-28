'use strict';
var even_group_calculate_average = function(collection){
  var temp = [];
  var result = [];
  var one = [];
  var two = [];
  var three = [];
  var count = 0;
  var sum1 = 0;
  var sum2 = 0;
  var sum3 = 0;

  for (var index in collection){
    if (index % 2 != 0){
      temp.push(collection[index]);
    }
  }

  for (var value of temp){
    if (value % 2 != 0){
      count++;
    }
    else if (0 <= value && value < 9){
      one.push(value);
    }
    else if (10 <= value && value < 99){
      two.push(value);
    }
    else if (100 <= value && value < 999){
      three.push(value);
    }
  }
  if (count == temp.length){
    result.push(0);
  }else if (one.length ==0 && two.length == 0){
    sum3 = Math.floor(three.reduce((a,b) => a+b)/three.length);
    result.push(sum3);
  }else if (one.length > 0 && two.length > 0 && three.length > 0){
    sum1 = Math.floor(one.reduce((a,b) => a+b)/one.length);
    sum2 = Math.floor(two.reduce((a,b) => a+b)/two.length);
    sum3 = Math.floor(three.reduce((a,b) => a+b)/three.length);
    result.push(sum1,sum2,sum3);
  }
  return result;

};
module.exports = even_group_calculate_average;
