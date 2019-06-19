/* 计数排序 */

function count_sort(arr, max) {
    var n = arr.length;
    var result = [];
    var C = Array(max).fill(0);
    
    for (var j = 0; j < n; j++) {
      C[arr[j]]++;
    }

    for (var k = 0; k <= max; k++) {
      while (C[k]-- > 0) {
        result.push(k);
      }
    }
    return result;
  }