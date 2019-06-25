
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function DoubleWayQuickSort(arr) {
    let len = arr.length
    _quickSort(arr, 0, len - 1)
    return arr;
  }

  function _quickSort(arr, l, r) {
    if (l >= r) {
      return
    }
    let p = _partition(arr, l, r);
    _quickSort(arr, l, p - 1);
    _quickSort(arr, p + 1, r);
    return arr;
  }

  function _partition(arr, l, r) {
    let v = arr[l],
      i = l + 1,
      j = r;
    while (true) {
      while( i <=r && arr[i] < v) {
        i++;
      }
      while (j >= l && arr[j] > v) {
        j--
      }
      if (i > j) break;
      swap(arr, i, j);
      i++;
      j--;
    }
    swap(arr, l, j);
    return j
  }