/**
 * CommonEvent
 * @Author Ace
 * @Create 2016-09-04 14:34
 */
var CommonEvent = (function (_super) {
    __extends(CommonEvent, _super);
    function CommonEvent() {
        _super.call(this);
        this.eventObjs = {};
        this.eventObjs = {};
    }
    var d = __define,c=CommonEvent,p=c.prototype;
    /**
     * 注册事件
     * @param type
     * @param callback
     * @param thisObj
     */
    p.registEvent = function (type, callback, thisObj) {
        if (this.checkCallbackIsExist(type, callback, thisObj)) {
            return;
        }
        var list = this.getCallbackList(type);
        list.push({ "callback": callback, "thisObj": thisObj });
    };
    /**
     * 移除事件
     * @param type
     * @param callback
     * @param thisObj
     */
    p.removeEvent = function (type, callback, thisObj) {
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
     * @param type
     * @param args
     */
    p.dispatch = function (type, args) {
        var list = this.getCallbackList(type);
        var temp;
        for (var i = 0; i < list.length; i++) {
            temp = list[i];
            temp["callback"].call(temp["thisObj"], args);
        }
    };
    /**
     * 获取回调列表
     * @param type
     * @returns {Function[]}
     */
    p.getCallbackList = function (type) {
        var list = [];
        if (this.eventObjs.hasOwnProperty(type)) {
            list = this.eventObjs[type];
        }
        else {
            this.eventObjs[type] = list;
        }
        return list;
    };
    /**
     * 检测回调函数是否已经存在
     * @param type
     * @param callback
     * @param thisObj
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
}(egret.EventDispatcher));
egret.registerClass(CommonEvent,'CommonEvent');
