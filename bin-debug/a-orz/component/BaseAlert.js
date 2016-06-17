/**
 * Created by Ace.C on 2016/4/15.
 */
var component;
(function (component) {
    var BaseAlert = (function (_super) {
        __extends(BaseAlert, _super);
        function BaseAlert() {
            _super.call(this);
        }
        var d = __define,c=BaseAlert,p=c.prototype;
        p.open = function () {
            _super.prototype.open.call(this);
        };
        p.close = function () {
            _super.prototype.close.call(this);
        };
        return BaseAlert;
    }(component.BaseSprite));
    component.BaseAlert = BaseAlert;
    egret.registerClass(BaseAlert,'component.BaseAlert');
})(component || (component = {}));
