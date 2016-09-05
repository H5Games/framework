/**
 * LogUtils
 * @Author Ace.c
 * @Time 2016-08-09 10:22
 */
var LogUtils = (function () {
    function LogUtils() {
    }
    var d = __define,c=LogUtils,p=c.prototype;
    /**
     * 打印
     */
    LogUtils.trace = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        console.log(args);
    };
    return LogUtils;
}());
egret.registerClass(LogUtils,'LogUtils');
