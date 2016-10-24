/**
 * CountUtils
 * @Author Ace
 * @Create 2016-09-04 14:34
 */
var CountUtils = (function () {
    function CountUtils() {
    }
    var d = __define,c=CountUtils,p=c.prototype;
    /**
     * 获取区间随机数
     * @returns {number}
     */
    CountUtils.getRandom = function (min, max) {
        return Math.floor(min + Math.random() * (max - min));
    };
    /**
     * 获取时间对应的秒数
     * @returns {number}
     */
    CountUtils.getSeconds = function (type, value) {
        var sec = 0;
        switch (type) {
            case TimeType.year:
                sec = value * 60 * 60 * 24 * 365;
                break;
            case TimeType.month:
                sec = value * 60 * 60 * 24 * 30;
                break;
            case TimeType.day:
                sec = value * 60 * 60 * 24;
                break;
            case TimeType.hour:
                sec = value * 60 * 60;
                break;
            case TimeType.minute:
                sec = value * 60;
                break;
            case TimeType.second:
                sec = value;
                break;
        }
        return sec;
    };
    return CountUtils;
}());
egret.registerClass(CountUtils,'CountUtils');
