/**
 * CommonEventType
 * @Author Ace
 * @Create 2016-09-04 14:34
 */
var EventType = (function () {
    function EventType() {
    }
    var d = __define,c=EventType,p=c.prototype;
    //------------------------------计时事件------------------------------
    //时间-时
    EventType.TIME_HOUR = "TIME_HOUR";
    //时间-分
    EventType.TIME_MUNITE = "TIME_MUNITE";
    //时间-秒
    EventType.TIME_SECOND = "TIME_SECOND";
    return EventType;
}());
egret.registerClass(EventType,'EventType');
