/**
 * Created by Ace.C on 2016/4/15.
 */
class BaseScene extends GameSprite {

    public constructor() {
        super();
    }

    public open():void {
        super.show();

        if (!this.gameManager.sceneLayer.contains(this)) {
            this.gameManager.sceneLayer.addChild(this);
        }
    }

    public close():void {
        super.hide();

        if (this.gameManager.sceneLayer.contains(this)) {
            this.gameManager.sceneLayer.removeChild(this);
        }
    }
}