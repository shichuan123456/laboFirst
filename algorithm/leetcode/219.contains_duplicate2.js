/* 
    给定一个整数数组和一个整数 k,判断数组中是否存在两个不同的索引 i 和 j,
    使得 nums [i] = nums [j],并且 i 和 j 的差的绝对值最大为 k。
*/

const containsNearbyDuplicate = function (nums, k) {
  let map = new Map()
  for(let i = 0, len = nums.length; i < len; i++) {
      if(map.has(nums[i])) {
          return true;
      }
  }

  map.set(nums[i], i) 
  if(map.size === k + 1) {
    map.delete(nums[i - k])
  }

}
