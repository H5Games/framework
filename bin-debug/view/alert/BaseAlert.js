/**
 * Created by Ace.C on 2016/4/15.
 */
var BaseAlert = (function (_super) {
    __extends(BaseAlert, _super);
    function BaseAlert() {
        _super.call(this);
    }
    var d = __define,c=BaseAlert,p=c.prototype;
    p.open = function () {
        _super.prototype.open.call(this);
        if (!this.gameManager.alertLayer.contains(this)) {
            this.gameManager.alertLayer.addChild(this);
        }
    };
    p.close = function () {
        _super.prototype.close.call(this);
        if (this.gameManager.alertLayer.contains(this)) {
            this.gameManager.alertLayer.removeChild(this);
        }
    };
    return BaseAlert;
}(GameSprite));
egret.registerClass(BaseAlert,'BaseAlert');
