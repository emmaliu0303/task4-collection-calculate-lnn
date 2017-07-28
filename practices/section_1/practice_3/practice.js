function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var tempB = [];
  for (var item of object_b.value){
    tempB.push(item);
  }
  let A = new Set(collection_a);
  let B = new Set(tempB);
  return Array.from(new Set([...A].filter(x => B.has(x))));

}

module.exports = collect_same_elements;
