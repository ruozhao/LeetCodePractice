/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let str_ = [];
    len=s.length;
    if(len==0)
        return true;
    if(len%2!=0)
        return false;

    for(let i=0;i<len;++i)
        {

            if((str_.length==0) && (s[i] == '}' || s[i] == ']' || s[i] == ')') )
               return false;

            if(s[i]=='{' || s[i] =='(' || s[i] == '[')
                str_.push(s[i]);

            else if((s[i]=='}' && str_.slice(str_.length - 1) != '{') || (s[i]==')' && str_.slice(str_.length - 1) != '(') ||(s[i]==']' && str_.slice(str_.length - 1) != '['))
               return false;

            else
               str_.pop();

        }

    if(str_.length == 0)
        return true;
    else
        return false;
};