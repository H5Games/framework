/**
 * CommonType
 * @Author Ace.c
 * @Create 2016-09-07 15:38
 */
enum CommonType {

}

/**
 * LinkType
 */
enum LinkType {
    http, socket
}

/**
 * 语言
 */
enum LanguageType {
    Chinese, English, German, Japanese, French, Italian, Dutch, Korean, Spanish, Russian, Portuguese, Romanian, Thai, All
}

/**
 * 性别
 */
enum GenderType {
    unknown = -1, female, male
}

/**
 * 方向
 */
enum DirectionType {
    Up, Down, Left, Right
}

/**
 * 品质
 */
enum QualityType {
    white, green, blue, purple, golden
}

/**
 * 颜色
 */
enum ColorType {
    white = 0xFFFFFF, green = 0x00e500, blue = 0x1a94d7, purple = 0xe938f2, golden = 0xFFD700,
    yellow = 0xffff00, pink = 0xFF3030, red = 0xf11300, black = 0x2e2d2d
}

/**
 * 时间
 */
enum TimeType {
    second, minute, hour, day, month, year
}

/**
 * 月份
 */
enum MonthType {
    january, february, march, april, may, june, july, august, september, october, november, december
}

/**
 * 周
 */
enum WeekType {
    monday, tuesday, wednesday, thursday, friday, saturday, sunday
}

module QualityType {
    export function getColor(quality: QualityType): ColorType {
        var color: ColorType;
        switch (quality) {
            case QualityType.white:
                color = ColorType.white;
                break;
            case QualityType.green:
                color = ColorType.green;
                break;
            case QualityType.blue:
                color = ColorType.blue;
                break;
            case QualityType.purple:
                color = ColorType.purple;
                break;
            case QualityType.golden:
                color = ColorType.golden;
                break;
            default :
                color = ColorType.white;
                break;
        }
        return color;
    }
}