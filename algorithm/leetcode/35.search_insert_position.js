let searchInsert = function (nums, target) {
  let res = nums.length;
  if (nums.indexOf(target) !== -1) {
    res = nums.indexOf(target)
  };
  for (let i = 0, len = nums.length; i < len; i++) {
    if (target < nums[i]) {
      res = i;
      break;
    }
  }

  return res
};

console.log(searchInsert([5, 6, 9, 34, 88], 162));
