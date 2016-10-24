/**
 * 实用公式工具
 * @Author Ace
 * @Create 2016-09-04 14:34
 */
var FormulaUtils = (function () {
    function FormulaUtils() {
    }
    var d = __define,c=FormulaUtils,p=c.prototype;
    /**
     * 获取区间随机数
     * @param min
     * @param max
     * @returns {number}
     */
    FormulaUtils.getRandomBetween = function (min, max) {
        return Math.floor(min + Math.random() * (max - min));
    };
    /**
     * 获取秒数,通过分数
     * @param minute
     * @returns {number}
     */
    FormulaUtils.getSecondByMinute = function (minute) {
        if (minute === void 0) { minute = 1; }
        return minute * 60;
    };
    /**
     * 获取秒数,通过时数
     * @param hour
     * @returns {number}
     */
    FormulaUtils.getSecondByHour = function (hour) {
        if (hour === void 0) { hour = 1; }
        return hour * 60 * 60;
    };
    /**
     * 获取秒数,通过天数
     * @param day
     * @returns {number}
     */
    FormulaUtils.getSecondByDay = function (day) {
        if (day === void 0) { day = 1; }
        return day * 60 * 60 * 24;
    };
    return FormulaUtils;
}());
egret.registerClass(FormulaUtils,'FormulaUtils');
