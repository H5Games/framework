/**
 * CommonUtils
 * @Author Ace.c
 * @Create 2016-09-07 15:44
 */
var CommonUtils = (function () {
    function CommonUtils() {
    }
    var d = __define,c=CommonUtils,p=c.prototype;
    /**
     * 获取品质对应的颜色值
     */
    CommonUtils.getQualityColor = function (quality) {
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
    };
    return CommonUtils;
}());
egret.registerClass(CommonUtils,'CommonUtils');
