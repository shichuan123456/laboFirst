/*  将数组中的 0 移动到后面（Move Zeros） */
var moveZeroes1 = function (nums) {
    var arr = nums.filter(function (item) {
        return item !== 0
    })
    for (var i = 0; i < arr.length; i++) {
        nums[i] = arr[i]
    }
    for (var j = arr.length; j < nums.length; j++) {
        nums[j] = 0
    }
    console.log(nums)
};

moveZeroes1([0, 1, 0, 3, 12])

var moveZeroes2 = function (nums) {
    var k = 0
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[k++] = nums[i]
        }
    }
    for (var j = k; j < nums.length; j++) {
        nums[j] = 0
    }
    console.log(nums)
};
moveZeroes2([0, 1, 0, 3, 12])

var moveZeroes3 = function (nums) {
   let k = 0;
   for( let i = 0, len = nums.length; i < len; i++) {
       if(nums[i]) {
           if( i !== k) {
               swap(nums, i, k);
               k++
           } else {
               k++;
           }
       }
   }
   console.log(nums)
};
var swap = function (arr, curr, next) {
    var temp = arr[curr]
    arr[curr] = arr[next]
    arr[next] = temp
}
moveZeroes3([0, 1, 0, 3, 12])