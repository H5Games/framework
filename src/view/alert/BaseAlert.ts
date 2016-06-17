/**
 * Created by Ace.C on 2016/4/15.
 */
class BaseAlert extends BaseSprite {
    public constructor() {
        super();
    }

    public open():void {
        super.open();

        if (!this.gameManager.alertLayer.contains(this)) {
            this.gameManager.alertLayer.addChild(this);
        }
    }

    public close():void {
        super.close();

        if (this.gameManager.alertLayer.contains(this)) {
            this.gameManager.alertLayer.removeChild(this);
        }
    }
}