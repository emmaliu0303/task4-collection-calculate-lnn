function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let A = new Set(collection_a);
  let result = [];
  for (var temp of Array.from(A)){
    var count = 0;
    let ans = {};
    if (temp.indexOf('-')>=0){
      var temp1 = temp.split('-')[0];
      count = Number.parseInt(temp.split('-')[1]);
      ans.key = temp1;
      ans.count = count;
      result.push(ans);
    }else {
      ans = {};
      count = 0;
      for (var i in collection_a){
        if (collection_a[i] == temp){
          count ++;
        }
      }
      ans.key = temp;
      ans.count = count;
      result.push(ans);
    }
  }
  let arrayB = object_b.value;
  for (var b in arrayB){
    for (var item of result){
      if (item.key == arrayB[b]){
        var num = Number.parseInt(item.count/3);
        item.count = item.count - num;
      }
    }
  }
  return result;
}

module.exports = create_updated_collection;
