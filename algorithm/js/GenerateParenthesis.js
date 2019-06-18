function generator(left, right, str, resultArray, n) {
    if(str.length == 2*n) {
        resultArray.push(str);
        return;
    }
    if(left < n) {
        generator(left + 1, right, str + "(", resultArray, n);
    }
    if((right < left)&&(right < n)) {
        generator(left, right + 1, str + ")", resultArray, n);
    }
}

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let resultArray = [];
    let str = "";

    generator(0, 0, str, resultArray, n);

    return resultArray;
};