/**
 * BaseSprite
 * @Author Ace.c
 * @Create 2016-09-05 15:43
 */
var BaseSprite = (function (_super) {
    __extends(BaseSprite, _super);
    function BaseSprite() {
        _super.call(this);
        this.isCreateComplete = false;
    }
    var d = __define,c=BaseSprite,p=c.prototype;
    p.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.isCreateComplete = true;
    };
    p.open = function () {
        this.show();
    };
    p.close = function () {
        this.hide();
    };
    p.show = function () {
        this.visible = true;
    };
    p.hide = function () {
        this.visible = false;
    };
    d(p, "skinState",undefined
        /**
         * 设置皮肤状态
         * @param value
         */
        ,function (value) {
            this.currentState = value;
            this.invalidateState();
        }
    );
    return BaseSprite;
}(eui.Component));
egret.registerClass(BaseSprite,'BaseSprite');
