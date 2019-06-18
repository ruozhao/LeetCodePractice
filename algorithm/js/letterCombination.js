/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let mapObj = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    };

    let digitArray = digits.split("");
    if(digitArray.length == 0) {
        return [];
    }
    if(digitArray.length == 1) {
        return mapObj[digitArray[0]];
    }

    let resultArray = [];
    let result = mapObj[digitArray[0]];

    for(let i = 1; i < digitArray.length; i++) {
        if(i > 1) {
            resultArray = [];
        }
        let tempArray = mapObj[digitArray[i]];
        let lenRes = result.length;
        for(let j = 0; j < tempArray.length; j++) {
            for(let k = 0; k < lenRes; k++) {
                resultArray.push(result[k] + tempArray[j]);
            }
        }
        result = resultArray;
    }
    return resultArray;
};