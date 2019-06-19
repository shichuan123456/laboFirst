/* 插入排序 */
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function insert_sort(arr) {
    for(let i = 1, len = arr.length; i < len; i++) {
        while(arr[i] < arr[i-1]) {
            swap(arr, i, i-1);
            i--;
        }
    }
    return arr;
  }