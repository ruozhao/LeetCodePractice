function compareArray(arrOri, arrDes) {
    if(!arrOri.length || !arrDes.length) {
       return false;
    }
    arrOri.sort((a, b) => a - b);
    arrDes.sort((a, b) => a - b);
    let flag = 1;
    console.log("the arrOri is " + JSON.stringify(arrOri)+", the arrDes is " + JSON.stringify(arrDes));
    let i = 0;
    while(i < arrOri.length) {
        if(arrOri[i] != arrDes[i]) {
            flag = 0;
            break;
        }
        i++;
    }
    if(flag) {
        return true;
    }
    return false;
}

/**
 * @param {number[][]} number
 * @return {number[][]}
 */
function deleteSameArray(number) {
    const size = number.length;
    for(let i = 0; i < size; i++) {
        for(let j = number.length; j > 0; j--) {
            if((number[j] !== undefined) && (number[i] !== undefined)) {
                let ff = compareArray(number[i], number[j]);
                console.log("The result is " + ff);
                if(ff) {
                    number.pop(number[j]);
                }
                console.log("the number is " + JSON.stringify(number));
            }
        }
    }
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(nums.length < 3) {
        return [];
    }

    let number = [];
    let hashTwonum = {};
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(hashTwonum[nums[j]] != undefined) {
                number.push([nums[j]].concat(hashTwonum[nums[j]]));
            } else {
                let target = 0 - nums[i] - nums[j];
                hashTwonum[target] = [nums[i], nums[j]];
            }
        }
    }

    deleteSameArray(number);

    return number;
};