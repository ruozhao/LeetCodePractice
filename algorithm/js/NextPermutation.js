function swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}
function reverse(nums, startIndex) {
    let i = startIndex;
    let j = nums.length - 1;
    while(i < j) {
        swap(nums, i, j);
        i++;
        j--;
    }
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let len = nums.length;

    let i = len - 2;
    while(i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    if(i >= 0) {
        let j = len - 1;
        while(j >= 0 && nums[j] <= nums[i]) {
            j--;
        }
        swap(nums, i, j);
    }
    reverse(nums, i + 1);
};