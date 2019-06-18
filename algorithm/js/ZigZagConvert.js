/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows == 1)
        return s;

    let len = s.length;
    let cycleSize = 2*numRows - 2;
    let converStr = new Array();

    for(let i = 0; i < numRows; i++) {           //outer cycle for layer
        for(let j = 0; j + i < len; j = j + cycleSize) {                  // inner cycle for every element
            converStr.push(s[j + i]);
            if((i != 0) && (i != numRows - 1) && (j + cycleSize - i < len)) {
               converStr.push(s[j + cycleSize - i]);
            }
        }
    }

    return converStr.join("");
};