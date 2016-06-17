/**
 * Created by Ace.C on 2016/4/15.
 */
var component;
(function (component) {
    var BaseSprite = (function (_super) {
        __extends(BaseSprite, _super);
        function BaseSprite() {
            _super.call(this);
            //�Ƿ�ȫ����������
            this.isChildrenCreated = false;
            this.gameManager = manager.GameManager.getInstance();
        }
        var d = __define,c=BaseSprite,p=c.prototype;
        p.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.isChildrenCreated = true;
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
        /**
         * ����Ƥ��״̬
         * @param value
         */
        p.setSkinState = function (value) {
            this.currentState = value;
            this.invalidateState();
        };
        return BaseSprite;
    }(eui.Component));
    component.BaseSprite = BaseSprite;
    egret.registerClass(BaseSprite,'component.BaseSprite');
})(component || (component = {}));
