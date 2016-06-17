/**
 * Created by Ace.C on 2016/4/25.
 */
var config;
(function (config) {
    (function (TextColor) {
        //��ɫ
        TextColor[TextColor["white"] = 16777215] = "white";
        //��ɫ
        TextColor[TextColor["green"] = 58624] = "green";
        //��ɫ
        TextColor[TextColor["blue"] = 1742039] = "blue";
        //��ɫ
        TextColor[TextColor["purple"] = 15284466] = "purple";
        //��ɫ
        TextColor[TextColor["golden"] = 16766720] = "golden";
        //����ɫ
        TextColor[TextColor["yellow"] = 16776960] = "yellow";
        //��ɫ
        TextColor[TextColor["red"] = 15799040] = "red";
        //��ɫ
        TextColor[TextColor["black"] = 3026221] = "black";
        //��ɫ
        TextColor[TextColor["pink"] = 16724016] = "pink";
        //����ɫ
        TextColor[TextColor["milkWhite"] = 16511407] = "milkWhite";
        //�Ұ�ɫ
        TextColor[TextColor["grayWhite"] = 13547170] = "grayWhite";
        //����ɫ
        TextColor[TextColor["lightYellow"] = 16765813] = "lightYellow";
        //�ٻ�ɫ
        TextColor[TextColor["orangeYellow"] = 16750848] = "orangeYellow";
        //ī��ɫ
        TextColor[TextColor["grayBlue"] = 3101047] = "grayBlue";
    })(config.TextColor || (config.TextColor = {}));
    var TextColor = config.TextColor;
})(config || (config = {}));
