/**
 * 存储工具
 * @Author Ace.c
 * @Time 2016-08-09 10:22
 */
class StorageUtils {

    /**
     * 获取本地数据
     * @param key
     * @returns {any|string}
     */
    public static getData(key: string): any {
        return egret.localStorage.getItem(CommonKey.GameName + "@" + key);
    }

    /**
     * 存储本地数据
     * @param key
     * @param value
     */
    public static setData(key: string, value) {
        egret.localStorage.setItem(CommonKey.GameName + "@" + key, value);
    }
}