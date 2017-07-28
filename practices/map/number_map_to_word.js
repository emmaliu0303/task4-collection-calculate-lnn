'use strict';
var number_map_to_word = function(collection){
  var result = collection.map(function (item) {
    return String.fromCharCode(item + 96);
  })
  return result;
  //return ['a','b','c','d','e'];
};

module.exports = number_map_to_word;
