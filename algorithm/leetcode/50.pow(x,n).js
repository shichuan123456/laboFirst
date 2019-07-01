let myPow = function (x, n) {
  let res = 1;
  if (n < 0) {
    n = -n;
    x = 1 / x;
  }

  while (n) {
    if (n % 2 === 1) res *= x;
    x *= x;
    n = Math.floor(n / 2);
  }
  return res;
};

console.log(myPow(3, 5));
