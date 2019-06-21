function shellSort1(arr) {
  let len = arr.length,
    gap = Math.floor(len / 2);
  while (gap > 0) {
    for (let i = gap; i < len; i++) {
      for (let j = i; j - gap >= 0; j -= gap) {
        if (arr[j - gap] > arr[j]) {
          [arr[j - gap], arr[j]] = [arr[j], arr[j - gap]]
        } else {
          break;
        }
      }
    }
    gap = gap >> 1
  }
  return arr
}
