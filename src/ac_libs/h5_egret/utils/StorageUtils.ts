/**
 * 存储工具
 * @Author Ace.c
 * @Time 2016-08-09 10:22
 */
class StorageUtils {

    public static LocalStoragePkgNm: string = "GameOfPower-";

    public static getLocalData(key): any {
        return egret.localStorage.getItem(this.LocalStoragePkgNm + key);
    }

    public static setLocalData(key, value) {
        egret.localStorage.setItem(this.LocalStoragePkgNm + key, value);
    }
}