const intersection = (nums1, nums2) => {
  // 求合集
  let [set, res] = [{}, []];
  for (let i = 0; i < nums1.length; i++) {
    set[nums1[i]] = true
  }
  for (let i = 0; i < nums2.length; i++) {
    if (set[nums2[i]]) {
      set[nums2[i]] = false;
      res.push(nums2[i])
    }
  }
  return res
};

console.log(intersection([1, 2, 3, 1, 1, 2, 4, 5, 12], [2, 3, 1, 1, 1, 23, 54, 3, 12, 1, 12, 12]));
