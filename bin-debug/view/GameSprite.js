/**
 * GameSprite
 * @Author Ace.c
 * @Create 2016-09-05 15:52
 */
var GameSprite = (function (_super) {
    __extends(GameSprite, _super);
    function GameSprite() {
        _super.call(this);
        this.gameManager = GameManager.getInstance();
    }
    var d = __define,c=GameSprite,p=c.prototype;
    return GameSprite;
}(BaseSprite));
egret.registerClass(GameSprite,'GameSprite');
