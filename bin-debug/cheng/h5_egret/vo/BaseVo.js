/**
 * BaseVo
 * @Author Ace.c
 * @Create 2016-09-07 16:00
 */
var BaseVo = (function () {
    function BaseVo(key, value) {
        if (key === void 0) { key = null; }
        if (value === void 0) { value = null; }
        this.setData(key, value);
    }
    var d = __define,c=BaseVo,p=c.prototype;
    /**
     * 添加数据
     * @param key
     * @param value
     * @returns {BaseVo}
     */
    p.setData = function (key, value) {
        if (key && value != "none" && value != null) {
            this[key] = value;
        }
        return this;
    };
    /**
     * 获取数据
     * @param key
     * @returns {any}
     */
    p.getData = function (key) {
        return this[key];
    };
    /**
     * 更新数
     * @param data
     */
    p.update = function (data) {
        if (!data)
            return;
        for (var key in data) {
            this.setData(key, data[key]);
        }
    };
    return BaseVo;
}());
egret.registerClass(BaseVo,'BaseVo');
