let removeElement = function (nums, val) {
    let index = 0, res = [];
    for(let i = 0, len = nums.length; i < len; i++) {
        if(nums[i] !== val) {
            res[index] = nums[i]
            index++;
        }
    }

    return res
};
console.log(removeElement([1,2,3,4,5,6,3,2,1,6,7], 6));
