/*
    Given a sorted array and a target value, return the index if the target is found.
    If not, return the index where it would be if it were inserted in order.
 */

let searchInsert = function (nums, target) {
    let res = -1;
    if(nums.indexOf(target) !== -1) {
        res = nums.indexOf(target)
    }

    for(let i = 0, len = nums.length; i < len; i++) {
        if(target < nums[i]) {
            res = i;
            break;
        }
    }

    if(res === -1) {
        res = nums.length;
    }

    return res;
};

console.log(searchInsert([2,4,5,6,7], 3));
 