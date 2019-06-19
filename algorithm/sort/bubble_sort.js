function bubble_sort(arr) {
  for (let i = 0, len = arr.length; i < len; i++) {
    for (let j = 1; j < len - i; j++) {
      if (arr[j - 1] > arr[j]) {
        swap(arr, j - 1, j)
      }
    }
  }
  return arr;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
