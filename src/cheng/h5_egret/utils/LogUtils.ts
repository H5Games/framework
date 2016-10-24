class LogUtils {

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

    public static getCN(root: any): string {
        if (root) {
            return root["__proto__"]["__class__"];
        } else {
            return "";
        }
    }
}