// solution1:
function expendAroundCenter(s, start, end) {
    let left = start;
    let right = end;

    while(left >= 0 && right < s.length && s[left] == s[right]) {
        left--;
        right++;
    }
    return right-left-1;    // right-left -2 +1
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length == 0 || s.length == 1) {
       return s;
    }

    let start = 0;
    let end = 0;
    let maxLen = 0;

    for(let i = 0; i < s.length; i++) {
        let singleMaxLen = expendAroundCenter(s, i, i);
        let doubleMaxLen = expendAroundCenter(s, i, i+1);
        maxLen = Math.max(Math.max(singleMaxLen, doubleMaxLen), maxLen);

        if(maxLen > end-start+1) {
            start = i - Math.floor((maxLen-1)/2);
            end = i + Math.floor(maxLen/2);
        }
    }
    console.log("the start is %d, the maxLen is %d", start, maxLen);
    return s.substr(start, maxLen);
};

// solution2

var longestPalindrome = function (s) {
    if (!s || !s.trim()) return '';
    if (s.length === 1) return s;
    if (s.length === 2) return s[0] === s[1] ? s[0] + s[1] : s[0];

    var sArray = s.split('');
    var x = [...new Set(sArray)];
    var result;
    var result1;
    var result2;

    if (x.length === 1) return s;

    // 以item为对称点 找到回文串
    result1 = sArray.reduce(function(memo, item, idx, self) {
        var ret;

        if (idx === 0 ) return memo;
        if (typeof self[idx - 1] !== 'string' || self[idx - 1] !== self[idx + 1]) return memo;

        memo = (function () {
            var middle = idx;
            var i = 1;
            var result = item;

            while (typeof self[middle + i] === 'string' && typeof self[middle - i] === 'string' && self[middle + i] === self[middle - i]) {
                ++i;
            }

            if (i === 1) {
                return memo;
            }

            i = i -1;
            result = self.slice(middle - i, middle + i+1).join('');

            return result.length > (memo && memo.length || 1) ? result : memo;
        })();

        return memo;
    }, sArray[0]);

    // 以item 和 next 两个一起为对称点 找到回文串
    result2 = sArray.reduce(function(memo, item, idx, self) {
         // axxa 中心轴是两个字母
        if (item !== self[idx + 1]) return memo;
        memo = (function () {
            var left = idx;
            var right = idx + 1;
            var i = 1;
            var result = item + item;

            while (typeof self[right + i] === 'string' &&typeof self[left - i] === 'string' && self[left - i] === self[right + i]) {
                ++i;
            }

            if (i === 1) return result.length > (memo && memo.length || 1) ? result : memo;

            i = i - 1;
            result = self.slice(left - i, right + i + 1).join('');

            return result.length > (memo && memo.length || 1)? result : memo;
        })();

        return memo;

    }, sArray[0]);

    return result1.length > result2.length ? result1 : result2;
}
