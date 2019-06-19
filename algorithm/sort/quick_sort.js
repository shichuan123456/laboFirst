function quickSort(arr) {
  _quickSort(arr, 0, arr.length - 1);
}

function _quickSort(arr, l, r) {
  if (l >= r) {
    return;
  };
  let p = partition(arr, l, r);
  _quickSort(arr, l, p-1);
  _quickSort(arr, p +1, r);
  return arr;
}

function partition(arr, l, r) {

  let e = arr[l],
    j = l;
  for (let i = l + 1; i <= r; i++) {
    if (e > arr[i]) {
      swap(arr, i, j + 1);
      j++
    }
  }
  swap(arr, j, l);
  return j
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
