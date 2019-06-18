var myAtoi2 = function (str) {
    var symbol = 1;
    var num = 0;
    var accepted = 0;

    for (var i = 0; i < str.length; i++) {
        if (/\d/.test(str[i])) {
            //数字
            accepted = 1;

            var tmp = Number(str[i]);

            if (num > 0x0CCCCCCC || (num === 0x0CCCCCCC && tmp > 7)) {
                //正溢出
                return 0x7FFFFFFF;
            }

            if (num < -0x0CCCCCCC || (num === -0x0CCCCCCC && tmp > 8)) {
                //负溢出
                return -0x80000000;
            }

            num = (num << 3) + (num << 1) + symbol * tmp;
            continue;
        } else if (accepted) {
            //其他字符，一旦开始接收，则全部停止
            break;
        }

        //初次遇到各种字符
        if (str[i] === ' ') {
            //空格，不理会
            continue;
        } else if (str[i] === '+') {
            //+号，开始接收
            accepted = 1;
            continue;
        } else if (str[i] === "-") {
            //-号，开始接收
            accepted = 1;
            symbol = -1;
            continue;
        }
        //其他任意字符第一次遇到直接返回
        return 0;
    }
    return num;
};