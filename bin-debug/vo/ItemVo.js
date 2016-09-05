/**
 * ItemData
 * @Author Ace.c
 * @Create 2016-09-05 15:38
 */
var ItemVo = (function (_super) {
    __extends(ItemVo, _super);
    function ItemVo() {
        _super.apply(this, arguments);
        //是否可以主动使用
        this.isActiveUse = true;
    }
    var d = __define,c=ItemVo,p=c.prototype;
    return ItemVo;
}(BaseGameVo));
egret.registerClass(ItemVo,'ItemVo');
