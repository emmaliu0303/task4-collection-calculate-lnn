function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var tempA = [];
  var tempB = [];
  for (var item of collection_a) {
    tempA.push(item.key);
  }
  for (var item of object_b.value){
    tempB.push(item);
  }
  let A = new Set(tempA);
  let B = new Set(tempB);
  return Array.from(new Set([...A].filter(x => B.has(x))));
}

module.exports = collect_same_elements;
