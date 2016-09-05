/**
 * Created by Ace.C on 2016/4/15.
 */
var BaseScene = (function (_super) {
    __extends(BaseScene, _super);
    function BaseScene() {
        _super.call(this);
    }
    var d = __define,c=BaseScene,p=c.prototype;
    p.open = function () {
        _super.prototype.open.call(this);
        if (!this.gameManager.sceneLayer.contains(this)) {
            this.gameManager.sceneLayer.addChild(this);
        }
    };
    p.close = function () {
        _super.prototype.close.call(this);
        if (this.gameManager.sceneLayer.contains(this)) {
            this.gameManager.sceneLayer.removeChild(this);
        }
    };
    return BaseScene;
}(GameSprite));
egret.registerClass(BaseScene,'BaseScene');
