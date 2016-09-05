/**
 * Created by Ace.C on 2016/4/15.
 */
var BasePanel = (function (_super) {
    __extends(BasePanel, _super);
    function BasePanel() {
        _super.call(this);
    }
    var d = __define,c=BasePanel,p=c.prototype;
    p.open = function () {
        _super.prototype.open.call(this);
        if (!this.gameManager.panelLayer.contains(this)) {
            this.gameManager.panelLayer.addChild(this);
        }
    };
    p.close = function () {
        _super.prototype.close.call(this);
        if (this.gameManager.panelLayer.contains(this)) {
            this.gameManager.panelLayer.removeChild(this);
        }
    };
    return BasePanel;
}(GameSprite));
egret.registerClass(BasePanel,'BasePanel');
