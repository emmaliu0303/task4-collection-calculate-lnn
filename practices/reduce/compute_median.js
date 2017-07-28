'use strict';

function compute_median(collection) {
  //在这里写入代码
  function sortNumber(a,b)
  {
    return a - b
  }
  collection = collection.sort(sortNumber);

  if (collection.length % 2 == 0){
    return (collection[Math.floor(collection.length/2)-1] + collection[Math.floor(collection.length/2)])/2
  }else {
    return collection[Math.floor(collection.length/2)];
  }
}

module.exports = compute_median;


