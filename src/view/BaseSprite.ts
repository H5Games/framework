/**
 * Created by Ace.C on 2016/4/15.
 */
class BaseSprite extends eui.Component {
    public gameManager:GameManager;

    public id:any;
    public isChildrenCreated:boolean = false;

    public constructor() {
        super();
        this.gameManager = GameManager.getInstance();
    }

    public childrenCreated() {
        super.childrenCreated();

        this.isChildrenCreated = true;
    }

    public open():void {
        this.show();
    }

    public close():void {
        this.hide();
    }

    public show():void {
        this.visible = true;
    }

    public hide():void {
        this.visible = false;
    }

    /**
     * 设置皮肤状态
     * @param value
     */
    public set skinState(value:string) {
        this.currentState = value;

        this.invalidateState();
    }
}