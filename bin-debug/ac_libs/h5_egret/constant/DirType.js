/**
 * DirectionType
 * @Author Ace.c
 * @Create 2016-09-05 15:26
 */
var DirType;
(function (DirType) {
    DirType[DirType["up"] = 0] = "up";
    DirType[DirType["rightUp"] = 1] = "rightUp";
    DirType[DirType["right"] = 2] = "right";
    DirType[DirType["rightDown"] = 3] = "rightDown";
    DirType[DirType["down"] = 4] = "down";
    DirType[DirType["leftDown"] = 5] = "leftDown";
    DirType[DirType["left"] = 6] = "left";
    DirType[DirType["leftUp"] = 7] = "leftUp";
})(DirType || (DirType = {}));
