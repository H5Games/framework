/**
 * Created by Ace.C on 2016/4/15.
 */
var component;
(function (component) {
    var BaseScene = (function (_super) {
        __extends(BaseScene, _super);
        function BaseScene() {
            _super.call(this);
        }
        var d = __define,c=BaseScene,p=c.prototype;
        p.open = function () {
            _super.prototype.open.call(this);
        };
        p.close = function () {
            _super.prototype.close.call(this);
        };
        return BaseScene;
    }(component.BaseSprite));
    component.BaseScene = BaseScene;
    egret.registerClass(BaseScene,'component.BaseScene');
})(component || (component = {}));
