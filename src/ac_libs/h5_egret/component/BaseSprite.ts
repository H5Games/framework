/**
 * BaseSprite
 * @Author Ace.c
 * @Create 2016-09-05 15:43
 */
class BaseSprite extends eui.Component {

    public data: any;

    public isCreateComplete: boolean = false;

    public constructor() {
        super();
    }

    public childrenCreated(): void {
        super.childrenCreated();

        this.isCreateComplete = true;
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