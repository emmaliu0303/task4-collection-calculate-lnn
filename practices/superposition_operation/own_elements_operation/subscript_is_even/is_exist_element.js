'use strict';
var is_exist_element = function(collection,element){
  var temp = [];
  var boo = false;
  for (var index in collection){
    if (index % 2 == 0){
      temp.push(collection[index]);
    }
  }
  for (var value of temp){
    if (value == element){
      boo = true;
      break;
    }else {
      boo = false;
    }
  }
  return boo;

};
module.exports = is_exist_element;
