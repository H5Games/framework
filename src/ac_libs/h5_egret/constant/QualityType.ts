/**
 * QualityType
 * @Author Ace.c
 * @Create 2016-09-05 15:28
 */
enum QualityType {
    white, green, blue, purple, golden
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