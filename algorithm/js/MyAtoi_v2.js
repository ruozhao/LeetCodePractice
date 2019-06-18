/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let strValue = str.replace(/^[\s]*/, "").split("");
    let flag = 0;
    let value = 0;
    let index = 2;

    if(strValue[0] == "-") {
        flag = "-";
    }
    if(strValue[0] == "-" || strValue[0] == "+") {
        strValue.shift();
    }

    for(let i = 0; i < strValue.length; i++) {
        if(isNaN(Number(strValue[i])) || strValue[i] == " ") {
            index = i;
            break;
        }
        value = value * 10 + Number(strValue[i]);
    }
    if(!index) {
        return 0;
    }

    if(flag === "-") {
        value = -value;
        if(value < -Math.pow(2,31))
            return -Math.pow(2,31);
    } else {
        if(value > Math.pow(2,31)-1)
            return Math.pow(2,31)-1;
    }

    return value;
};