/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let i = 0;
    let j = nums.length -1;

    while(i <= j) {
        let middle = i + Math.floor((j - i)/2);
        if(target == nums[middle]) {
            return middle;
        }

        if(target < nums[middle]) {
            j = middle - 1;
        } else {
            i = middle + 1;
        }
    }
    return i;
};