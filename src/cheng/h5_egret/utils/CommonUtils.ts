/**
 * CommonUtils
 * @Author Ace.c
 * @Create 2016-09-07 15:44
 */
class CommonUtils {


    /**
     * 获取品质对应的颜色值
     */
    public static getQualityColor(quality: QualityType): ColorType {
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