/**
 * Created by Ace.C on 2016/4/8.
 */
var common;
(function (common) {
    /**
     * 事件派发基类
     */
    var CustomEvent = (function () {
        function CustomEvent() {
            //集合
            this.callbackGather = {};
            this.callbackGather = {};
        }
        var d = __define,c=CustomEvent,p=c.prototype;
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
         * @param data
         */
        p.dispatch = function (type, data) {
            var list = this.getCallbackList(type);
            var temp;
            for (var i = 0; i < list.length; i++) {
                temp = list[i];
                temp["callback"].call(temp["thisObj"], data);
            }
        };
        /**
         * 获取回调列表
         * @param type
         * @returns {Function[]}
         */
        p.getCallbackList = function (type) {
            var list = [];
            if (this.callbackGather.hasOwnProperty(type)) {
                list = this.callbackGather[type];
            }
            else {
                this.callbackGather[type] = list;
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
        return CustomEvent;
    }());
    common.CustomEvent = CustomEvent;
    egret.registerClass(CustomEvent,'common.CustomEvent');
})(common || (common = {}));
