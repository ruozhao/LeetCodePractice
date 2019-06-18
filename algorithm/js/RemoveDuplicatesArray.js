/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let numCount = 0;
    let len = nums.length;

    for(let i = 0; i < len;) {
        numCount++;
        let j = i + 1;
        while(nums[i] == nums[j]) {
            j++;
        }
        nums[numCount] = nums[j];
        i = j;
    }
    while(nums.length != numCount) {
        nums.pop();
    }
    return numCount;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let numCount = 0;
    let len = nums.length;

    for(let i = 0; i < len;) {
        numCount++;
        let j = i + 1;
        while(nums[i] == nums[j]) {
            j++;
        }
        nums[numCount] = nums[j];
        i = j;
    }
    return numCount;
};