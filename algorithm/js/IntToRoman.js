/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let romanStr = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let result = "";
    let i = 0;

    while(i < values.length) {
        if(Math.floor(num/values[i])) {
            result = result + romanStr[i];
            num = num - values[i];
        } else {
            i++;
        }
    }

    return result;
};