/* 选择排序 */

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function select_sort(arr) {
    for(let i = 0, len = arr.length; i < len - 1; i++) {
        let minI = i;
        for(j = i + 1; j < len; j++) {
            if(arr[minI] > arr[j]) {
                minI = j;
            }
        }
        if(minI !== i) {
            swap(arr, i, minI);
        }
    }
    return arr;
  }