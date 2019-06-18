/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(!s) {
        return 0;
    }
    let str = "";
    let len = 1;    // store the longest length

    for(let i = 0; i < s.length; i++) {
        const indexStr = str.indexOf(s[i]);
        if(indexStr == -1) {
            str = str + s[i];
        } else {
            str = str.slice(indexStr + 1) + s[i];
        }

        if(len < str.length) {
            len = str.length;
        }
    }
    return len;
};