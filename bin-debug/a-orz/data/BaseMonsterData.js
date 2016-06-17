/**
 * Created by Ace.C on 2016/4/19.
 */
var data;
(function (data) {
    /**
     * ��������
     */
    var BaseMonsterData = (function (_super) {
        __extends(BaseMonsterData, _super);
        function BaseMonsterData() {
            _super.apply(this, arguments);
        }
        var d = __define,c=BaseMonsterData,p=c.prototype;
        return BaseMonsterData;
    }(data.BaseCharData));
    data.BaseMonsterData = BaseMonsterData;
    egret.registerClass(BaseMonsterData,'data.BaseMonsterData');
})(data || (data = {}));
