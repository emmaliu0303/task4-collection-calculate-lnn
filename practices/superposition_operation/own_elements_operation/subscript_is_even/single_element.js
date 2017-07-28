'use strict';
var single_element = function(collection){
  var temp = [];
  var a = [];
  for (var index in collection){
    if (index % 2 != 0){
      temp.push(collection[index]);
    }
  }
  for (var i = 0; i < temp.length; i++){
    for (var j = i +1; j < temp.length; j++){
      if (temp[i] == temp[j]){
        a.push(temp[i]);
        break;
      }
    }
  }
  var A = new Set(temp);
  a = Array.from(new Set([...A].filter(x =>! new Set(a).has(x))));
  return a;
};
module.exports = single_element;
