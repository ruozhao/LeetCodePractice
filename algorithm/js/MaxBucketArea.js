/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if(height.length == 1) {
       return 0;
     }
    if(height.length == 2) {
        return Math.min(height[0], height[1]);
    }
    let maxArea = 0;
    let i = 0, j = height.length;
    while(i < j) {
        let minValue = Math.min(height[i], height[j]);
        let maxTmpArea = minValue * (j - i);
        if(maxTmpArea > maxArea){
            maxArea = maxTmpArea;
        }
        if(height[i] <= height[j]) {
            i++;
        } else {
            j--;
        }
    }
    return maxArea;
};