/**
 * BaseGameVo
 * @Author Ace.c
 * @Create 2016-09-05 15:44
 */
var BaseGameVo = (function (_super) {
    __extends(BaseGameVo, _super);
    function BaseGameVo() {
        _super.call(this);
        //名字
        this.name = "";
        //描述
        this.description = "";
        //等级
        this.level = 1;
        //品质
        this.quality = QualityType.white;
        this.gameManager = GameManager.getInstance();
    }
    var d = __define,c=BaseGameVo,p=c.prototype;
    return BaseGameVo;
}(BaseVo));
egret.registerClass(BaseGameVo,'BaseGameVo');
