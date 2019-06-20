function three_sum(arr, target) {
    let sortMap = arr.map((item, i) => {
      return {value: item, index: i}
    });
    sortMap.sort((a, b) => a.value - b.value);
    for (let i = 0, len = arr.length; i < len; i++) {
      let j = i + 1,
        k = len - 1;
      while (j < k) {
        if (sortMap[i].value + sortMap[j].value + sortMap[k].value === target) {
          return [sortMap[i].index, sortMap[j].index, sortMap[k].index];
        } else if (sortMap[i].value + sortMap[j].value + sortMap[k].value < target) {
          j++;
        } else {
          k--;
        }
      }
    }
    return -1;
  }