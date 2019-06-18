/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    let rowArray = [];
    let res = [];

    function combination(candidates, target, index) {
        if(target == 0) {
            console.log("index is ===== " + index);
            console.log("rowArray is " + rowArray.toString());
            res.push(rowArray.slice());
            return;
        }
        if(target < 0) {
            console.log(" target is ==== " + target);
            return;
        }
        for(let i = index; i < candidates.length;) {
            rowArray.push(candidates[i]);
            combination(candidates, target - candidates[i], i + 1);
            rowArray.pop();
            let j = i+1;
            while(j < candidates.length) {
                if(candidates[j] == candidates[i])
                    j++;
                else
                    break;
            }
            i = j;
        }
    }

    combination(candidates, target, 0);
    return res;
};