/**
 * Created by Ace.C on 2016/4/15.
 */
var PanelManager = (function (_super) {
    __extends(PanelManager, _super);
    function PanelManager() {
        _super.call(this);
        this.gather = {};
    }
    var d = __define,c=PanelManager,p=c.prototype;
    p.initManager = function () {
    };
    /**
     * 打开或者关闭
     * @param id
     */
    p.openOrClose = function (id) {
        var basePanel = this.gather[id];
        if (!basePanel) {
            return;
        }
        if (!basePanel.visible) {
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
        var basePanel = this.gather[id];
        if (basePanel) {
            this.curPanel = basePanel;
            this.curPanel.open();
        }
    };
    /**
     * 关闭
     * @param id
     */
    p.close = function (id) {
        var basePanel = this.gather[id];
        basePanel.close();
    };
    /**
     * 关闭全部
     */
    p.closeAll = function () {
        var basePanel;
        for (var id in this.gather) {
            basePanel = this.gather[id];
            basePanel.close();
        }
    };
    return PanelManager;
}(BaseManager));
egret.registerClass(PanelManager,'PanelManager');
