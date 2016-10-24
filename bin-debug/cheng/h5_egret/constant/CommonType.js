/**
 * CommonType
 * @Author Ace.c
 * @Create 2016-09-07 15:38
 */
var CommonType;
(function (CommonType) {
})(CommonType || (CommonType = {}));
/**
 * LinkType
 */
var LinkType;
(function (LinkType) {
    LinkType[LinkType["http"] = 0] = "http";
    LinkType[LinkType["socket"] = 1] = "socket";
})(LinkType || (LinkType = {}));
/**
 * 语言
 */
var LanguageType;
(function (LanguageType) {
    LanguageType[LanguageType["Chinese"] = 0] = "Chinese";
    LanguageType[LanguageType["English"] = 1] = "English";
    LanguageType[LanguageType["German"] = 2] = "German";
    LanguageType[LanguageType["Japanese"] = 3] = "Japanese";
    LanguageType[LanguageType["French"] = 4] = "French";
    LanguageType[LanguageType["Italian"] = 5] = "Italian";
    LanguageType[LanguageType["Dutch"] = 6] = "Dutch";
    LanguageType[LanguageType["Korean"] = 7] = "Korean";
    LanguageType[LanguageType["Spanish"] = 8] = "Spanish";
    LanguageType[LanguageType["Russian"] = 9] = "Russian";
    LanguageType[LanguageType["Portuguese"] = 10] = "Portuguese";
    LanguageType[LanguageType["Romanian"] = 11] = "Romanian";
    LanguageType[LanguageType["Thai"] = 12] = "Thai";
    LanguageType[LanguageType["All"] = 13] = "All";
})(LanguageType || (LanguageType = {}));
/**
 * 性别
 */
var GenderType;
(function (GenderType) {
    GenderType[GenderType["unknown"] = -1] = "unknown";
    GenderType[GenderType["female"] = 0] = "female";
    GenderType[GenderType["male"] = 1] = "male";
})(GenderType || (GenderType = {}));
/**
 * 方向
 */
var DirectionType;
(function (DirectionType) {
    DirectionType[DirectionType["Up"] = 0] = "Up";
    DirectionType[DirectionType["Down"] = 1] = "Down";
    DirectionType[DirectionType["Left"] = 2] = "Left";
    DirectionType[DirectionType["Right"] = 3] = "Right";
})(DirectionType || (DirectionType = {}));
/**
 * 品质
 */
var QualityType;
(function (QualityType) {
    QualityType[QualityType["white"] = 0] = "white";
    QualityType[QualityType["green"] = 1] = "green";
    QualityType[QualityType["blue"] = 2] = "blue";
    QualityType[QualityType["purple"] = 3] = "purple";
    QualityType[QualityType["golden"] = 4] = "golden";
})(QualityType || (QualityType = {}));
/**
 * 颜色
 */
var ColorType;
(function (ColorType) {
    ColorType[ColorType["white"] = 16777215] = "white";
    ColorType[ColorType["green"] = 58624] = "green";
    ColorType[ColorType["blue"] = 1742039] = "blue";
    ColorType[ColorType["purple"] = 15284466] = "purple";
    ColorType[ColorType["golden"] = 16766720] = "golden";
    ColorType[ColorType["yellow"] = 16776960] = "yellow";
    ColorType[ColorType["pink"] = 16724016] = "pink";
    ColorType[ColorType["red"] = 15799040] = "red";
    ColorType[ColorType["black"] = 3026221] = "black";
})(ColorType || (ColorType = {}));
/**
 * 时间
 */
var TimeType;
(function (TimeType) {
    TimeType[TimeType["second"] = 0] = "second";
    TimeType[TimeType["minute"] = 1] = "minute";
    TimeType[TimeType["hour"] = 2] = "hour";
    TimeType[TimeType["day"] = 3] = "day";
    TimeType[TimeType["month"] = 4] = "month";
    TimeType[TimeType["year"] = 5] = "year";
})(TimeType || (TimeType = {}));
/**
 * 月份
 */
var MonthType;
(function (MonthType) {
    MonthType[MonthType["january"] = 0] = "january";
    MonthType[MonthType["february"] = 1] = "february";
    MonthType[MonthType["march"] = 2] = "march";
    MonthType[MonthType["april"] = 3] = "april";
    MonthType[MonthType["may"] = 4] = "may";
    MonthType[MonthType["june"] = 5] = "june";
    MonthType[MonthType["july"] = 6] = "july";
    MonthType[MonthType["august"] = 7] = "august";
    MonthType[MonthType["september"] = 8] = "september";
    MonthType[MonthType["october"] = 9] = "october";
    MonthType[MonthType["november"] = 10] = "november";
    MonthType[MonthType["december"] = 11] = "december";
})(MonthType || (MonthType = {}));
/**
 * 周
 */
var WeekType;
(function (WeekType) {
    WeekType[WeekType["monday"] = 0] = "monday";
    WeekType[WeekType["tuesday"] = 1] = "tuesday";
    WeekType[WeekType["wednesday"] = 2] = "wednesday";
    WeekType[WeekType["thursday"] = 3] = "thursday";
    WeekType[WeekType["friday"] = 4] = "friday";
    WeekType[WeekType["saturday"] = 5] = "saturday";
    WeekType[WeekType["sunday"] = 6] = "sunday";
})(WeekType || (WeekType = {}));
var QualityType;
(function (QualityType) {
    function getColor(quality) {
        var color;
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
            default:
                color = ColorType.white;
                break;
        }
        return color;
    }
    QualityType.getColor = getColor;
})(QualityType || (QualityType = {}));
