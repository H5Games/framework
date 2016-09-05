/**
 * 字符串处理工具
 * @Author Ace.c
 * @Time 2016-08-09 10:22
 */
var StringUtils = (function () {
    function StringUtils() {
    }
    var d = __define,c=StringUtils,p=c.prototype;
    /**
     * 获取字符长度
     * @param text
     * @returns {number}
     */
    StringUtils.getCharLength = function (text) {
        var len = 0;
        for (var i = 0; i < text.length; i++) {
            if (text.charCodeAt(i) >= 0 && text.charCodeAt(i) <= 128) {
                len += 1;
            }
            else {
                len += 2;
            }
        }
        return len;
    };
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
     * @returns {string} 格式:1,000,000
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
     * 替换字符串
     * @param str
     * @param rep
     * @returns {string}
     */
    StringUtils.replaceString = function (str, rep) {
        var reg = new RegExp('\{[0-9]\}');
        return str.replace(reg, rep);
    };
    /**
     * 替换非法字符
     * @param str
     * @returns {string}
     */
    StringUtils.replaceDirtyWords = function (str) {
        return DirtyWordUtils.replace(str);
    };
    /**
     * 检索非法字符
     * @param str
     * @returns {boolean}
     */
    StringUtils.searchDirtyWords = function (str) {
        return DirtyWordUtils.search(str);
    };
    /**
     * 删除空格
     * @param str
     * @returns {string}
     */
    StringUtils.deleteSpace = function (str) {
        var arr = str.split("");
        while (arr.indexOf(" ") != -1) {
            arr.splice(arr.indexOf(" "), 1);
        }
        return arr.join("");
    };
    return StringUtils;
}());
egret.registerClass(StringUtils,'StringUtils');
