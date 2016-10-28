/* 二分插入排序，是对插入排序的一种改进 NlogN */
function binaryInsertSort(arr) {
  for (let i = 1, len = arr.length; i < len; i++) {
    let left = 0,
      right = i - 1,
      key = arr[i];
    while (left <= right) {
      let midI = parseInt(left + (right - left) / 2),
        mid = arr[midI];
      if (key < mid) {
        right = midI - 1;
      } else {
        left = midI + 1;
      }
    }

    for (j = i - 1; j >= left; j--) {
      arr[j + 1] = arr[j];
    }
    arr[left] = key
  }
  return arr;
}