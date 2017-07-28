function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let A = Array.from(new Set(collection_a));
  let result = [];
  for (var item of A){
    result.push({key:item,count:0});
  }
  console.log(A);
  for (var a in A){
    var num = 0;
    for (var item in collection_a){
      if (collection_a[item] == A[a]){
        num ++;
      }
    }
    for (var item of result){
      if (item.key == A[a]){
        item.count = num;
      }
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
