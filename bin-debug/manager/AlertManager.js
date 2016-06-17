/**
 * Created by Ace.C on 2016/4/15.
 */
var manager;
(function (manager) {
    /**
     * ��ʾ������
     */
    var AlertManager = (function (_super) {
        __extends(AlertManager, _super);
        function AlertManager() {
            _super.call(this);
            this.classGather = {};
            this.alertGather = {};
        }
        var d = __define,c=AlertManager,p=c.prototype;
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
            var baseAlert = this.alertGather[id];
            if (baseAlert && baseAlert.visible) {
                this.close(id);
            }
            else {
                this.open(id);
            }
        };
        /**
         * ����
         * @param id
         */
        p.open = function (id) {
            var baseAlert = this.alertGather[id];
            if (!baseAlert) {
                baseAlert = new this.classGather[id];
                this.alertGather[id] = baseAlert;
            }
            baseAlert.open();
        };
        /**
         * �ر�
         * @param id
         */
        p.close = function (id) {
            var baseAlert = this.alertGather[id];
            if (baseAlert)
                baseAlert.close();
        };
        /**
         * �ر�ȫ��
         */
        p.closeAll = function () {
            var baseAlert;
            for (var id in this.alertGather) {
                baseAlert = this.alertGather[id];
                baseAlert.close();
            }
        };
        return AlertManager;
    }(manager.BaseManager));
    manager.AlertManager = AlertManager;
    egret.registerClass(AlertManager,'manager.AlertManager');
})(manager || (manager = {}));
