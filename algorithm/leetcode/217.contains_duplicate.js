const containsDuplicate = function (nums) {
  let map = new Map()
  for (let index = 0; index < nums.length; index++) {
    if(map.has(nums[i])) {
        return true;
    }
    map.set(nums[i], true);
  }
}
