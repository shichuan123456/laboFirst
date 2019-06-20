function max(arr) {
    if (arr.length == 1) return arr[0];
    let temp = arr.shift();
    let maxP = max(arr);
    return temp >= maxP ? temp : maxP;
  }

  function max1(arr) {
    let maxI = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[maxI] < arr[i]) {
        maxI = i;
      }
    }
    return arr[maxI];
  }

  function max2(arr) {
    return arr.reduce((max, cur) => max > cur ? max : cur, -1 / 0);
  }