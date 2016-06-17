/**
 * Created by Ace.C on 2016/4/15.
 */
var manager;
(function (manager) {
    /**
     * ����������
     */
    var SceneManager = (function (_super) {
        __extends(SceneManager, _super);
        function SceneManager() {
            _super.call(this);
            this.classGather = {};
            this.sceneGather = {};
        }
        var d = __define,c=SceneManager,p=c.prototype;
        p.initManager = function () {
            _super.prototype.initManager.call(this);
        };
        /**
         * �л�����
         * @param id
         */
        p.change = function (id) {
            if (this.scene && this.scene.visible) {
                this.scene.close();
            }
            this.scene = this.sceneGather[id];
            if (!this.scene) {
                this.scene = new this.classGather[id];
                this.sceneGather[id] = this.scene;
            }
            this.scene.open();
        };
        return SceneManager;
    }(manager.BaseManager));
    manager.SceneManager = SceneManager;
    egret.registerClass(SceneManager,'manager.SceneManager');
})(manager || (manager = {}));
