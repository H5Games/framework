/**
 * H5Core
 * @Author Ace.c
 * @Create 2016-09-05 15:20
 */
var H5Core = (function () {
    function H5Core() {
    }
    var d = __define,c=H5Core,p=c.prototype;
    H5Core.init = function (stage) {
        this.stage = stage;
    };
    d(H5Core, "stageWidth"
        //舞台宽度
        ,function () {
            return this.stage.stageWidth;
        }
    );
    d(H5Core, "stageHeight"
        //舞台高度
        ,function () {
            return this.stage.stageHeight;
        }
    );
    return H5Core;
}());
egret.registerClass(H5Core,'H5Core');
