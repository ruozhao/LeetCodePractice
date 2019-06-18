/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    nums.sort((a, b) => {
      let strA = a + "", strB = b + "";
      let an = a * Math.pow(10, strB.length) + b;
      let bn = b * Math.pow(10, strA.length) + a;
      return (bn - an) / Math.pow(10, strA.length + strB.length);
    });
    let rtn = nums.join("").replace(/^0+/, "");
    if (!rtn) return "";
    return rtn
  };
  
  /* This sort will compare the  (3 > 30)  (3 < 34)  (30 < 34)
  
    nums.sort((a, b) => {
      let strA = a + "", strB = b + "";
      let an = a * Math.pow(10, strB.length) + b;
      let bn = b * Math.pow(10, strA.length) + a;
      return (bn - an) / Math.pow(10, strA.length + strB.length);
    });
  
   */