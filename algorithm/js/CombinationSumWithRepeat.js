/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    let rowArray = [];
    let res = [];

    function combination(candidates, target, index) {
        if(target < 0) {
            return;
        }
        if(target == 0) {
            res.push(rowArray.slice());
            return;
        }
        for(let i = index; i < candidates.length; i++) {
            rowArray.push(candidates[i]);
            combination(candidates, target - candidates[i], i);
            rowArray.pop();
        }
    }
    combination(candidates, target, 0);
    return res;
};