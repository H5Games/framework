/**
 * BaseCharVo
 * @Author Ace
 * @Create 2016-09-04 14:34
 */
var BaseCharVo = (function (_super) {
    __extends(BaseCharVo, _super);
    function BaseCharVo() {
        _super.apply(this, arguments);
    }
    var d = __define,c=BaseCharVo,p=c.prototype;
    p.update = function (data) {
        _super.prototype.update.call(this, data);
        if (this.portrait == "default") {
            this.portrait = "1001";
        }
    };
    return BaseCharVo;
}(BaseVo));
egret.registerClass(BaseCharVo,'BaseCharVo');
