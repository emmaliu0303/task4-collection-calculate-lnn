'use strict';
var rank_asc = function(collection){
  //return [6,5,4,3,2];
  function SortNum(a,b) {
    return a - b ;
  }
  return collection.sort().reverse();

};

module.exports = rank_asc;
