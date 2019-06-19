function quick_sort1(arr) {
    return _sort(arr, 0, arr.length - 1)
  }

  function _sort(arr) {
    let l = 0,
      len = arr.length,
      r = len - 1;
    if (len < 2) return arr;
    let midI = Math.floor(l + (r - l) / 2),
      mid = arr[midI];
    let leftArr = [],
      rightArr = [];
    for (let i = 0, len = arr.length; i < len; i++) {
      if (i !== midI) {
        if (arr[i] < mid) {
          leftArr.push(arr[i])
        } else {
          rightArr.push(arr[i])
        }
      }
    }
    return _sort(leftArr).concat([mid], _sort(rightArr));
  }