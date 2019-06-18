/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let num = String(x).split("");
    num = num.reverse();

    if(String(x) == num.join("")) {
        return true;
    }
    return false;
};