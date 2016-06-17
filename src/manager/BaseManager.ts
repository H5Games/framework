/**
 * Created by Ace.C on 2016/4/13.
 */
class BaseManager extends GameEventDispatcher {

    //游戏管理器
    public gameManager:GameManager;

    public constructor() {
        super();
        this.gameManager = GameManager.getInstance();
    }

    public initManager():void {
    }
}