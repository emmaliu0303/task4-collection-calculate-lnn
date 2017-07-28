'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var result = [];
  var temp;
  temp = collection.reduce((a,b) => a+b);
  result.push(Math.round(temp / collection.length));
  result = result.map(function (item) {
    return String.fromCharCode(96+item);
  })
  return result[0];
}

module.exports = average_to_letter;

