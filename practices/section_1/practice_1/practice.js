function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  let A = new Set(collection_a);
  let B = new Set(collection_b);
  return Array.from(new Set([...A].filter(x => B.has(x))));
}

module.exports = collect_same_elements;
