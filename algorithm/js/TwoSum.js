/*
** @param {nums} array
** @param {target} number
** @return {array} array
 */

var twoSum = function(nums, target) {

    let responseArr = {};

    for(let i = 0; i < nums.length; i++) {
        if(responseArr[nums[i]] !== undefined) {         // read
            return [nums[i], responseArr[nums[i]]];
        } else {
            responseArr[target - nums[i]] = nums[i];     // store
        }
    }

}