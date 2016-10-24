/**
 * QualityType
 * @Author Ace.c
 * @Create 2016-09-05 15:28
 */
var QualityType;
(function (QualityType) {
    QualityType[QualityType["white"] = 0] = "white";
    QualityType[QualityType["green"] = 1] = "green";
    QualityType[QualityType["blue"] = 2] = "blue";
    QualityType[QualityType["purple"] = 3] = "purple";
    QualityType[QualityType["golden"] = 4] = "golden";
})(QualityType || (QualityType = {}));
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
