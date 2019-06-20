function twoSum1(arr, target) {
    arr.sort((a, b) => a - b);
    let i = 0,
      len = arr.length,
      j = len - 1;
    while (i < j) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      } else if (arr[i] + arr[j] < target) {
        i++;
      } else {
        j++;
      }
    }
    return false;
  }


  function twoSum2(arr, target) {
    for (let i = 0, len = arr.length; i < len - 1; i++) {
      for (let j = i + 1; j < len; j++) {
        if (arr[i] + arr[j] === target) {
          return [i, j]
        }
      }
    }
  }

  function twoSum3(arr, target) {
    const map = {};
    for (let i = 0, len = arr.length; i < len; i++) {
      let need = target - arr[i];
      if (map[need] != undefined) {
        return [map[need], i];
      } else {
        map[arr[i]] = i;
      }
    }
  }