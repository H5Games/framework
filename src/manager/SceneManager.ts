/**
 * Created by Ace.C on 2016/4/15.
 */
class SceneManager extends BaseManager {

    public gather:any = {};
    public curScene:BaseScene;

    public constructor() {
        super();
    }

    public initManager():void {

    }

    /**
     * 打开
     * @param id
     */
    public open(id:any):void {
        if (!this.gather[id]) {
            return;
        }

        if (this.curScene) {
            this.curScene.close();
        }

        this.curScene = this.gather[id];
        this.curScene.open();
    }
}