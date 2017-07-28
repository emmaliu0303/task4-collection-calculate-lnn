'use strict';
var number_map_to_word_over_26 = function(collection){
  //return ['a','m','aa','ad','y','aa'];
  var result = collection.map(function (item) {
    var collection_temp = ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var i = Math.floor(item / 26);
    var j = item % 26 ;
    if (item % 26 == 0){
      i -= 1;
      j = 26;
    }
    return collection_temp[i]+collection_temp[j];
  })
  return result;
};

module.exports = number_map_to_word_over_26;
