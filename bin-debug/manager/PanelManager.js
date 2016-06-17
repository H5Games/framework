/**
 * Created by Ace.C on 2016/4/15.
 */
var manager;
(function (manager) {
    /**
     * ����������
     */
    var PanelManager = (function (_super) {
        __extends(PanelManager, _super);
        function PanelManager() {
            _super.call(this);
            this.classGather = {};
            this.panelGather = {};
        }
        var d = __define,c=PanelManager,p=c.prototype;
        p.initManager = function () {
            _super.prototype.initManager.call(this);
        };
        /**
         * �򿪻��߹ر�����
         * 1.��������δ����,������.
         * 2.���������Ѵ���,���ر�.
         * @param id
         */
        p.openOrClose = function (id) {
            var basePanel = this.panelGather[id];
            if (basePanel && basePanel.visible) {
                this.close(id);
            }
            else {
                this.open(id);
            }
        };
        /**
         * ��������
         * @param id
         */
        p.open = function (id) {
            var basePanel = this.panelGather[id];
            if (!basePanel) {
                basePanel = new this.classGather[id];
                this.panelGather[id] = basePanel;
            }
            basePanel.open();
        };
        /**
         * �ر�����
         * @param id
         */
        p.close = function (id) {
            var basePanel = this.panelGather[id];
            if (basePanel)
                basePanel.close();
        };
        /**
         * �ر�ȫ��
         */
        p.closeAll = function () {
            var basePanel;
            for (var id in this.panelGather) {
                basePanel = this.panelGather[id];
                basePanel.close();
            }
        };
        return PanelManager;
    }(manager.BaseManager));
    manager.PanelManager = PanelManager;
    egret.registerClass(PanelManager,'manager.PanelManager');
})(manager || (manager = {}));
