/**
 * Created by Ace.C on 2016/4/15.
 */
class BaseScene extends BaseSprite {

    public constructor() {
        super();
    }

    public open():void {
        super.open();

        if (!this.gameManager.sceneLayer.contains(this)) {
            this.gameManager.sceneLayer.addChild(this);
        }
    }

    public close():void {
        super.close();

        if (this.gameManager.sceneLayer.contains(this)) {
            this.gameManager.sceneLayer.removeChild(this);
        }
    }
}