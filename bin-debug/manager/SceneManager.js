/**
 * Created by Ace.C on 2016/4/15.
 */
var SceneManager = (function (_super) {
    __extends(SceneManager, _super);
    function SceneManager() {
        _super.call(this);
        this.gather = {};
    }
    var d = __define,c=SceneManager,p=c.prototype;
    p.initManager = function () {
    };
    /**
     * 打开
     * @param id
     */
    p.open = function (id) {
        if (!this.gather[id]) {
            return;
        }
        if (this.curScene) {
            this.curScene.close();
        }
        this.curScene = this.gather[id];
        this.curScene.open();
    };
    return SceneManager;
}(BaseManager));
egret.registerClass(SceneManager,'SceneManager');
