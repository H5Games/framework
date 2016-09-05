/**
 * 存储工具
 * @Author Ace.c
 * @Time 2016-08-09 10:22
 */
var StorageUtils = (function () {
    function StorageUtils() {
    }
    var d = __define,c=StorageUtils,p=c.prototype;
    StorageUtils.getLocalData = function (key) {
        return egret.localStorage.getItem(this.LocalStoragePkgNm + key);
    };
    StorageUtils.setLocalData = function (key, value) {
        egret.localStorage.setItem(this.LocalStoragePkgNm + key, value);
    };
    StorageUtils.LocalStoragePkgNm = "GameOfPower-";
    return StorageUtils;
}());
egret.registerClass(StorageUtils,'StorageUtils');
