/**
 * Created by Ace.C on 2016/4/15.
 */
var AlertManager = (function (_super) {
    __extends(AlertManager, _super);
    function AlertManager() {
        _super.call(this);
        this.gather = {};
    }
    var d = __define,c=AlertManager,p=c.prototype;
    p.initManager = function () {
    };
    /**
     * 打开或者关闭
     * @param id
     */
    p.openOrClose = function (id) {
        var baseAlert = this.gather[id];
        if (!baseAlert) {
            return;
        }
        if (!baseAlert.visible) {
            this.open(id);
        }
        else {
            this.close(id);
        }
    };
    /**
     * 打开
     * @param id
     */
    p.open = function (id) {
        var baseAlert = this.gather[id];
        if (baseAlert) {
            this.curAlert = baseAlert;
            this.curAlert.open();
        }
    };
    /**
     * 关闭
     * @param id
     */
    p.close = function (id) {
        var baseAlert = this.gather[id];
        baseAlert.close();
    };
    /**
     * 关闭全部
     */
    p.closeAll = function () {
        var baseAlert;
        for (var id in this.gather) {
            baseAlert = this.gather[id];
            baseAlert.close();
        }
    };
    return AlertManager;
}(BaseManager));
egret.registerClass(AlertManager,'AlertManager');
