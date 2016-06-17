/**
 * Created by Ace.C on 2016/4/13.
 */
var manager;
(function (manager) {
    var BaseManager = (function (_super) {
        __extends(BaseManager, _super);
        function BaseManager() {
            _super.call(this);
            this.gameManager = manager.GameManager.getInstance();
        }
        var d = __define,c=BaseManager,p=c.prototype;
        p.initManager = function () {
        };
        return BaseManager;
    }(common.CustomEvent));
    manager.BaseManager = BaseManager;
    egret.registerClass(BaseManager,'manager.BaseManager');
})(manager || (manager = {}));
