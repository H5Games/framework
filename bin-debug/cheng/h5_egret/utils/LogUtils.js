var LogUtils = (function () {
    function LogUtils() {
    }
    var d = __define,c=LogUtils,p=c.prototype;
    // public static info(str: any, root: any = null): void {
    //     if (SystemConfig.isDebug()) {
    //         console.info("LogUtils[info][" + LogUtils.getCN(root) + "]----->" + str);
    //     }
    // }
    //
    // public static warn(str: any, root: any = null): void {
    //     if (SystemConfig.isDebug()) {
    //         console.warn("LogUtils[warn][" + LogUtils.getCN(root) + "]----->" + str);
    //     }
    // }
    LogUtils.getCN = function (root) {
        if (root) {
            return root["__proto__"]["__class__"];
        }
        else {
            return "";
        }
    };
    return LogUtils;
}());
egret.registerClass(LogUtils,'LogUtils');
