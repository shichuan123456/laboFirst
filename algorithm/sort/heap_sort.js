function heapSort(arr) {
  for (var i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {           //从上而下生成大顶堆
    heapAdjust(arr, i, arr.length);
  }

  for (var j = arr.length - 1; j > 0; j--) {
    swap(arr, 0, j);                   //交换顶推元素和末尾元素，使最大元素换到队尾
    heapAdjust(arr, 0, j);                    //重新调整堆
  }

  return arr;
}

function heapAdjust(arr, i, len) { //自上而下
  var temp = arr[i];
  var largest = i;
  var left = 2 * i + 1;
  var right = 2 * i + 2;
  if (left < len && arr[left] > arr[largest]) {
    larget = left;
  }

  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest != i) {
    swap(arr, larget, i);
    heapAdjust(arr, largest, len);
  }
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


alert(heapSort([4,3,2,1,5,7,2,1,3,6,2,3,6]))