/**
 * Created by Ace.C on 2016/4/15.
 */
var data;
(function (data_1) {
    /**
     * 基础数据
     */
    var BaseData = (function () {
        function BaseData() {
            //名字
            this.name = "";
            //描述
            this.description = "";
            //等级
            this.level = 1;
            //品质
            this.quality = config.Quality.white;
            this.gameManager = manager.GameManager.getInstance();
        }
        var d = __define,c=BaseData,p=c.prototype;
        /**
         * 更新
         * @param data
         */
        p.update = function (data) {
            for (var key in data) {
                this[key] = data[key];
            }
        };
        return BaseData;
    }());
    data_1.BaseData = BaseData;
    egret.registerClass(BaseData,'data.BaseData');
})(data || (data = {}));
