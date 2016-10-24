/**
 * 实用公式工具
 * @Author Ace
 * @Create 2016-09-04 14:34
 */
class FormulaUtils {

    /**
     * 获取区间随机数
     * @param min
     * @param max
     * @returns {number}
     */
    public static getRandomBetween(min: number, max: number) {
        return Math.floor(min + Math.random() * (max - min));
    }

    /**
     * 获取秒数,通过分数
     * @param minute
     * @returns {number}
     */
    public static getSecondByMinute(minute: number = 1) {
        return minute * 60;
    }

    /**
     * 获取秒数,通过时数
     * @param hour
     * @returns {number}
     */
    public static getSecondByHour(hour: number = 1) {
        return hour * 60 * 60;
    }

    /**
     * 获取秒数,通过天数
     * @param day
     * @returns {number}
     */
    public static getSecondByDay(day: number = 1) {
        return day * 60 * 60 * 24;
    }
}