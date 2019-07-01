/**
 * 滑动窗口
 * 在数组中找出最短长度的子数组，使子数组中的和大于等于S
 */
const minSubArrayLen = function (s, nums) {
  let l = 0,
    r = -1,
    sum = 0,
    len = nums.length,
    size = len + 1;
  while (l < len) {
    if (r <= len - 1 && sum < s) {
      sum += nums[++r]
    } else {
      sum -= nums[l++]
    }

    if (sum >= s) {
      size = Math.min(size, r - l + 1)
    }
  }

  if (size === nums.length + 1) {
    return 0;
  }

  return size;
};
