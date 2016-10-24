/**
 * BaseVo
 * @Author Ace.c
 * @Create 2016-09-07 16:00
 */
class BaseVo {

    public constructor(key: any = null, value: any = null) {
        this.setData(key, value);
    }

    /**
     * 添加数据
     * @param key
     * @param value
     * @returns {BaseVo}
     */
    public setData(key: any, value: any): any {
        if (key && value != "none" && value != null) {
            this[key] = value;
        }
        return this;
    }

    /**
     * 获取数据
     * @param key
     * @returns {any}
     */
    public getData(key: any): any {
        return this[key];
    }

    /**
     * 更新数
     * @param data
     */
    public update(data: any): void {
        if (!data) return;

        for (var key in data) {
            this.setData(key, data[key]);
        }
    }
}