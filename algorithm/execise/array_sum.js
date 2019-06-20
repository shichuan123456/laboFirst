function sum(arr) {
  if (arr.length === 1) return arr[0];
  return arr.pop() + sum(arr);
}

function sum1(arr) {
  let sum = 0;
  for (let i = 0, len = arr.length; i < len; i++) {
    sum += arr[i];
  }
  return sum;
}

function sum2(arr) {
  return arr.reduce((sum, cur) => sum += cur, 0);
}
