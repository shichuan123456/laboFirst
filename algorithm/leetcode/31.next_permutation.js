/* 
  1、先找出最大的索引 k 满足 nums[k] < nums[k+1]，如果不存在，就翻转整个数组;
  2、再找出另一个最大索引 l 满足 nums[l] > nums[k];
  3、交换 nums[l] 和 nums[k];
  4、最后翻转 nums[k+1:]。
*/
var nextPermutation = function (nums) {
  for (var i = nums.length - 1; i > 0 && nums[i] <= nums[i - 1]; i--);
  if (i === 0) {
    reverse(0, nums.length - 1);
    return;
  }
  for (var j = i + 1; j < nums.length && nums[i - 1] < nums[j]; j++);
  swap(i - 1, j - 1);
  reverse(i, nums.length - 1);
  return;

  function reverse(start, end) {
    while (start < end) {
      swap(start, end);
      start++;
      end--;
    }
  }

  function swap(i, j) {
    var tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
  }
}

var a = [1, 2, 3]
nextPermutation(a);

console.log(a)
