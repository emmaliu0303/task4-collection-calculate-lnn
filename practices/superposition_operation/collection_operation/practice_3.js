'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var odd = [];
  for (var i = 0; i < collection.length;i++){
    if (collection[i] % 2 != 0){
      odd.push(collection[i]);
    }
  }
  var collection = odd.map(function (item) {
    return item * 3 + 5 ;
  });
  var ans = collection.reduce((a,b) => a + b);
  return ans;
}

module.exports = hybrid_operation_to_uneven;

