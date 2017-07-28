function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var temp = [];
  function reverse(collection) {
    for (var i = 0; i < collection.length; i++){
      if (Array.isArray(collection[i])){
        reverse(collection[i]);
      }else {
        temp.push(collection[i]);
      }
    }
  }
  reverse(collection_b);
  let A = new Set(collection_a);
  let B = new Set(temp);
  return Array.from(new Set([...A].filter(x => B.has(x))));


}

module.exports = collect_same_elements;
