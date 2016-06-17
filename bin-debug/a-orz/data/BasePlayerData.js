/**
 * Created by Ace.C on 2016/4/19.
 */
var data;
(function (data) {
    /**
     * ��������
     */
    var BasePlayerData = (function (_super) {
        __extends(BasePlayerData, _super);
        function BasePlayerData() {
            _super.apply(this, arguments);
        }
        var d = __define,c=BasePlayerData,p=c.prototype;
        return BasePlayerData;
    }(data.BaseCharData));
    data.BasePlayerData = BasePlayerData;
    egret.registerClass(BasePlayerData,'data.BasePlayerData');
})(data || (data = {}));
