/**
 * Created by Ace.C on 2016/3/29.
 */
var utils;
(function (utils) {
    /**
     * 字符串处理工具
     */
    var StringUtils = (function () {
        function StringUtils() {
        }
        var d = __define,c=StringUtils,p=c.prototype;
        /**
         * 获取时间字符串
         * @param sec 秒数
         * @returns {string} 00d00h00m00s
         */
        StringUtils.getTimeString = function (sec) {
            sec = sec < 0 ? 0 : sec;
            var d = Math.floor(sec / 86400);
            var h = Math.floor(sec % 86400 / 3600);
            var m = Math.floor(sec % 3600 / 60);
            var s = Math.floor(sec % 60);
            var str = "";
            if (d > 0)
                str += (d < 10 ? "0" + d : d) + "d";
            if (h > 0)
                str += (h < 10 ? "0" + h : h) + "h";
            if (m > 0)
                str += (m < 10 ? "0" + m : m) + "m";
            if (s > 0)
                str += (s < 10 ? "0" + s : s) + "s";
            return str;
        };
        /**
         * 获取时间字符串2
         * @param sec 秒数
         * @returns {string} 00:00:00
         */
        StringUtils.getTimeString2 = function (sec) {
            sec = sec < 0 ? 0 : sec;
            var h = Math.floor(sec / 3600);
            var m = Math.floor(sec % 3600 / 60);
            var s = Math.floor(sec % 60);
            return (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
        };
        /**
         * 获得值字符串
         * @param value
         * @returns {string} 1,000,000
         */
        StringUtils.getValueString = function (value) {
            var arr = value.toString().split("");
            var str = "";
            var len = arr.length;
            for (var i = 1; i <= len; i++) {
                str = arr.pop() + str;
                if (i % 3 == 0 && i != len) {
                    str = "," + str;
                }
            }
            return str;
        };
        /**
         * 替换非法字符
         * @param str
         * @returns {string}
         */
        StringUtils.replaceIllegalChars = function (str) {
            var index = 0;
            var repStr;
            while (index < config.illegalChars.illegalChars.length) {
                if (str.indexOf(config.illegalChars.illegalChars[index]) != -1) {
                    repStr = "";
                    for (var i = 0; i < config.illegalChars.illegalChars[index].length; i++) {
                        repStr += "*";
                    }
                    str = str.replace(config.illegalChars.illegalChars[index], repStr);
                    continue;
                }
                index++;
            }
            return str;
        };
        /**
         * 检索非法字符
         * @param str
         * @returns {boolean}
         */
        StringUtils.searchIllegalChars = function (str) {
            var index = 0;
            while (index < config.illegalChars.illegalChars.length) {
                if (str.indexOf(config.illegalChars.illegalChars[index]) != -1) {
                    return true;
                }
                index++;
            }
            return false;
        };
        return StringUtils;
    }());
    utils.StringUtils = StringUtils;
    egret.registerClass(StringUtils,'utils.StringUtils');
})(utils || (utils = {}));
