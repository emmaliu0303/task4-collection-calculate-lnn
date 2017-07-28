'use strict';
var calculate_median = function(collection){
  var temp = [];
  var ans = 0;
  for (var index in collection){
    if (index % 2 != 0){
      temp.push(collection[index]);
    }
  }
  console.log(temp);
  function sortNum(a,b) {
    return a-b;
  }
  temp = temp.sort(sortNum);
  if (temp.length % 2 == 0){
    var i = Math.floor(temp.length / 2 - 1);
    var j = Math.ceil(temp.length / 2 );
    ans = Math.ceil((temp[i] + temp[j]) / 2);
  }else {
    var i = Math.floor(temp.length / 2 );
    ans = temp[i];
  }

return ans;

};
module.exports = calculate_median;
