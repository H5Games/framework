/**
 * Created by Ace.C on 2016/4/25.
 */
var acore = (function () {
    function acore() {
    }
    var d = __define,c=acore,p=c.prototype;
    //����
    acore.startUp = function (stage) {
        this.stage = stage;
    };
    d(acore, "stageWidth"
        //��̨����
        ,function () {
            return this.stage.stageWidth;
        }
    );
    d(acore, "stageHeight"
        //��̨�߶�
        ,function () {
            return this.stage.stageHeight;
        }
    );
    return acore;
}());
egret.registerClass(acore,'acore');
