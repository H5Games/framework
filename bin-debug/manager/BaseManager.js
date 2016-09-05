/**
 * Created by Ace.C on 2016/4/13.
 */
var BaseManager = (function (_super) {
    __extends(BaseManager, _super);
    function BaseManager() {
        _super.call(this);
        this.gameManager = GameManager.getInstance();
    }
    var d = __define,c=BaseManager,p=c.prototype;
    p.initManager = function () {
    };
    return BaseManager;
}(CommonEvent));
egret.registerClass(BaseManager,'BaseManager');
