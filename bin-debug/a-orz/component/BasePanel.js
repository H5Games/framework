/**
 * Created by Ace.C on 2016/4/15.
 */
var component;
(function (component) {
    var BasePanel = (function (_super) {
        __extends(BasePanel, _super);
        function BasePanel() {
            _super.call(this);
        }
        var d = __define,c=BasePanel,p=c.prototype;
        p.open = function () {
            _super.prototype.open.call(this);
        };
        p.close = function () {
            _super.prototype.close.call(this);
        };
        return BasePanel;
    }(component.BaseSprite));
    component.BasePanel = BasePanel;
    egret.registerClass(BasePanel,'component.BasePanel');
})(component || (component = {}));
