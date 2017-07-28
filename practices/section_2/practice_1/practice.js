function count_same_elements(collection) {
  //在这里写入代码
  let A = new Set(collection);
  let result = [];
  for (var temp of Array.from(A)){
    var count = 0;
    let ans = {};
    for (var i in collection){
      if (collection[i] == temp){
        count ++;
      }
    }
    ans.key = temp;
    ans.count = count;
    result.push(ans);
  }
  return result;
}

module.exports = count_same_elements;
