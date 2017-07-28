'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  var temp = [];
  var result = [];
  for (var i of collection){
    if (collection[i] % 2 == 0){
      temp.push(collection[i]);
    }
  }
   return temp.map(function (item) {
    return String.fromCharCode(96 + item);
  })
}

module.exports = even_to_letter;
