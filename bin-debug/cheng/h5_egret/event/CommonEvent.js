/**
 * CommonEvent
 * @Author Ace
 * @Create 2016-09-04 14:34
 */
var CommonEvent = (function () {
    function CommonEvent() {
        this.callbacks = {};
    }
    var d = __define,c=CommonEvent,p=c.prototype;
    /**
     * 注册事件
     */
    p.addEventListener = function (type, callback, thisObj) {
        if (this.checkCallbackIsExist(type, callback, thisObj)) {
            return;
        }
        var list = this.getCallbackList(type);
        list.push({ "callback": callback, "thisObj": thisObj });
    };
    /**
     * 移除事件
     */
    p.delEventListener = function (type, callback, thisObj) {
        if (!this.checkCallbackIsExist(type, callback, thisObj)) {
            return;
        }
        var list = this.getCallbackList(type);
        var temp;
        for (var i = 0; i < list.length; i++) {
            temp = list[i];
            if (temp["callback"] == callback && temp["thisObj"] == thisObj) {
                list.splice(i, 1);
                break;
            }
        }
    };
    /**
     * 广播事件
     */
    p.dispatchEvent = function (type, args) {
        var list = this.getCallbackList(type);
        var temp;
        for (var i = 0; i < list.length; i++) {
            temp = list[i];
            temp["callback"].call(temp["thisObj"], args);
        }
    };
    /**
     * 获取回调列表
     * @returns {Function[]}
     */
    p.getCallbackList = function (type) {
        var list = [];
        if (this.callbacks.hasOwnProperty(type)) {
            list = this.callbacks[type];
        }
        else {
            this.callbacks[type] = list;
        }
        return list;
    };
    /**
     * 检测回调函数是否已经存在
     * @returns {boolean}
     */
    p.checkCallbackIsExist = function (type, callback, thisObj) {
        var isExist = false;
        var list = this.getCallbackList(type);
        var temp;
        for (var i = 0; i < list.length; i++) {
            temp = list[i];
            if (temp["callback"] == callback && temp["thisObj"] == thisObj) {
                isExist = true;
                break;
            }
        }
        return isExist;
    };
    return CommonEvent;
}());
egret.registerClass(CommonEvent,'CommonEvent');
