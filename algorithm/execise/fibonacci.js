function fib1(c) {
    if(c === 1 || c === 2) return 1;
    return fib1(c-2) + fib1(c-1);
  }

  function fib(c) {
    let result = [1,1], pre = result[1], preprev = result[0];
    for (let i = 2, len = c; i < len; i++) {
      result[i] = pre + preprev;
      preprev = pre;
      pre = result[i];
    }
    return result.pop();
  }