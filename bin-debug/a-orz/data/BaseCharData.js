/**
 * Created by Ace.C on 2016/4/19.
 */
var data;
(function (data) {
    /**
     * ������ɫ����
     */
    var BaseCharData = (function (_super) {
        __extends(BaseCharData, _super);
        function BaseCharData() {
            _super.apply(this, arguments);
            //�Ա�
            this.gender = config.Gender.unknow;
        }
        var d = __define,c=BaseCharData,p=c.prototype;
        return BaseCharData;
    }(data.BaseData));
    data.BaseCharData = BaseCharData;
    egret.registerClass(BaseCharData,'data.BaseCharData');
})(data || (data = {}));
