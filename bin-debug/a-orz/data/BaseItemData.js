/**
 * Created by Ace.C on 2016/4/19.
 */
var data;
(function (data) {
    /**
     * ������Ʒ����
     */
    var BaseItemData = (function (_super) {
        __extends(BaseItemData, _super);
        function BaseItemData() {
            _super.apply(this, arguments);
            //�Ƿ���������ʹ��
            this.isActiveUse = true;
        }
        var d = __define,c=BaseItemData,p=c.prototype;
        return BaseItemData;
    }(data.BaseData));
    data.BaseItemData = BaseItemData;
    egret.registerClass(BaseItemData,'data.BaseItemData');
})(data || (data = {}));
