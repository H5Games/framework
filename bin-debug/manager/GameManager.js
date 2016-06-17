/**
 * Created by Ace.C on 2016/4/15.
 */
var manager;
(function (manager) {
    /**
     * ��Ϸ������
     */
    var GameManager = (function (_super) {
        __extends(GameManager, _super);
        function GameManager() {
            _super.call(this);
        }
        var d = __define,c=GameManager,p=c.prototype;
        GameManager.getInstance = function () {
            if (!this._instance) {
                this._instance = new manager.GameManager();
            }
            return this._instance;
        };
        /**
         * ��ʼ������
         */
        p.initManager = function () {
            this.alertManager = new manager.AlertManager();
            this.panelManager = new manager.PanelManager();
            this.sceneManager = new manager.SceneManager();
        };
        return GameManager;
    }(common.CustomEvent));
    manager.GameManager = GameManager;
    egret.registerClass(GameManager,'manager.GameManager');
})(manager || (manager = {}));
