/**
 * 存储工具
 * @Author Ace.c
 * @Time 2016-08-09 10:22
 */
var StorageUtils = (function () {
    function StorageUtils() {
    }
    var d = __define,c=StorageUtils,p=c.prototype;
    /**
     * 获取本地数据
     * @param key
     * @returns {any|string}
     */
    StorageUtils.getData = function (key) {
        return egret.localStorage.getItem(CommonKey.GameName + "@" + key);
    };
    /**
     * 存储本地数据
     * @param key
     * @param value
     */
    StorageUtils.setData = function (key, value) {
        egret.localStorage.setItem(CommonKey.GameName + "@" + key, value);
    };
    return StorageUtils;
}());
egret.registerClass(StorageUtils,'StorageUtils');
