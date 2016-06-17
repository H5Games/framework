/**
 * Created by Ace.C on 2016/4/28.
 */
var config;
(function (config) {
    //��������
    (function (LinkType) {
        LinkType[LinkType["http"] = 0] = "http";
        LinkType[LinkType["socket"] = 1] = "socket";
    })(config.LinkType || (config.LinkType = {}));
    var LinkType = config.LinkType;
    //��������
    (function (DirectionType) {
        DirectionType[DirectionType["up"] = 0] = "up";
        DirectionType[DirectionType["rightUp"] = 1] = "rightUp";
        DirectionType[DirectionType["right"] = 2] = "right";
        DirectionType[DirectionType["rightDown"] = 3] = "rightDown";
        DirectionType[DirectionType["down"] = 4] = "down";
        DirectionType[DirectionType["leftDown"] = 5] = "leftDown";
        DirectionType[DirectionType["left"] = 6] = "left";
        DirectionType[DirectionType["leftUp"] = 7] = "leftUp";
    })(config.Direction || (config.Direction = {}));
    var DirectionType = config.Direction;
    //�Ա�����
    (function (GenderType) {
        GenderType[GenderType["unknow"] = -1] = "unknow";
        GenderType[GenderType["female"] = 0] = "female";
        GenderType[GenderType["male"] = 1] = "male";
    })(config.Gender || (config.Gender = {}));
    var GenderType = config.Gender;
    //Ʒ������
    (function (QualityType) {
        QualityType[QualityType["white"] = 0] = "white";
        QualityType[QualityType["green"] = 1] = "green";
        QualityType[QualityType["blue"] = 2] = "blue";
        QualityType[QualityType["purple"] = 3] = "purple";
        QualityType[QualityType["golden"] = 4] = "golden";
    })(config.Quality || (config.Quality = {}));
    var QualityType = config.Quality;
})(config || (config = {}));
