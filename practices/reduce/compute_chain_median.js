'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  var temp = [];
  var chain = collection.split('->');
  for (var i = 0; i<chain.length; i++ ){
    temp.push(Number.parseInt(chain[i]))
  }
  function sortNumber(a,b)
  {
    return a - b
  }
  temp = temp.sort(sortNumber);

  if (temp.length % 2 == 0){
    return (temp[Math.floor(temp.length/2)-1] + temp[Math.floor(temp.length/2)])/2
  }else {
    return temp[Math.floor(temp.length/2)];
  }
}

module.exports = compute_chain_median;
