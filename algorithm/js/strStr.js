/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle == "")
        return 0;
    for(var i = 0, j = 0; i < haystack.length && j < needle.length; i++) {
        if(haystack[i] == needle[j]) {
            j++;
        } else {
            i = i - j;
            j = 0;
        }
    }
    if(j != needle.length)
        return -1;
    return i- j;
};