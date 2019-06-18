/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romanStr = [/^M/, /^CM/, /^D/, /^CD/, /^C/, /^XC/, /^L/, /^XL/, /^X/, /^IX/, /^V/, /^IV/, /^I/];
    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    let i = 0;
    let result = 0;
    while(s && i < romanStr.length) {
        if(romanStr[i].test(s)) {
            result = result + values[i];
            s = s.substr(1);
            if(i % 2) {
                s = s.substr(1);
            }
        } else {
            i++;
        }
    }
    return result;
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romanValObj = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    let result = 0;
    for(let i = 0; i < s.length; i++) {
        result = result + romanValObj[s[i]];
        if(romanValObj[s[i + 1]] > romanValObj[s[i]]) {
           result = result - 2 * romanValObj[s[i]];
        }
    }

    return result;
};