/**
 *
 * @Author Ace.c
 * @Time 2016-06-16 14:02
 */
class GameUtils {

    //品质颜色
    public static getQualityColor(quality:Quality):Color {
        var color:Color;
        switch (quality) {
            case Quality.white:
                color = Color.white;
                break;
            case Quality.green:
                color = Color.green;
                break;
            case Quality.blue:
                color = Color.blue;
                break;
            case Quality.purple:
                color = Color.purple;
                break;
            case Quality.golden:
                color = Color.golden;
                break;
            default :
                color = Color.white;
                break;
        }
        return color;
    }
}