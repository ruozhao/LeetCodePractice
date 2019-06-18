/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let numberToArray = String(Math.abs(x)).split('');
  
    let result = '';
    for (let i = 0; i < numberToArray.length;) {
        result = result + numberToArray.pop();
    }
    result = x > 0 ? Number(result) : - Number(result);
  
    if (result > Math.pow(2, 31) - 1 || result < - Math.pow(2, 31)) {
      result = 0;
    }
  
    return result;
  };