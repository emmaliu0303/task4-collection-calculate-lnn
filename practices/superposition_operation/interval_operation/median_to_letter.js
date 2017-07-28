'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  var character = ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var temp = [];
  var num = 0;
  function sortNum(a,b) {
    return a-b;
  }
  collection = collection.sort(sortNum);

  if (collection.length % 2 == 0){
    var i = Math.floor(collection.length / 2 - 1);
    var j = Math.ceil(collection.length / 2);
    num = Math.ceil((collection[i] + collection[j]) / 2);
  }else {
    var i = Math.ceil(collection.length / 2 );
    num = Math.ceil(collection[i]);
  }
  var s1 = Math.floor(num / 26);
  var s2 = num % 26;
  if (num % 26 == 0){
    s1 -= 1;
    s2 = 26;
  }
  temp.push(character[s1]+character[s2]);
  return temp[0];

}

module.exports = median_to_letter;
