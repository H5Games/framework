/**
 * CharVo
 * @Author Ace.c
 * @Create 2016-09-05 15:35
 */
var CharVo = (function (_super) {
    __extends(CharVo, _super);
    function CharVo() {
        _super.apply(this, arguments);
        //性别
        this.gender = GenderType.unknow;
    }
    var d = __define,c=CharVo,p=c.prototype;
    return CharVo;
}(BaseGameVo));
egret.registerClass(CharVo,'CharVo');
