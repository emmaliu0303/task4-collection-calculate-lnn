'use strict';
var calculate_average = function(collection){
  var temp = [];
  var ans = 0;
  for (var index in collection){
    if (index % 2 != 0){
      temp.push(collection[index]);
    }
  }
  console.log(temp);
  ans = Math.ceil(temp.reduce((a,b) => a+b)/temp.length);
  return ans;
};
module.exports = calculate_average;
