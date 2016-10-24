/**
 * Created by Ace.C on 2016/4/15.
 */
class BaseAlert extends GameSprite {
    public constructor() {
        super();
    }

    public open():void {
        super.show();

        if (!this.gameManager.alertLayer.contains(this)) {
            this.gameManager.alertLayer.addChild(this);
        }
    }

    public close():void {
        super.hide();

        if (this.gameManager.alertLayer.contains(this)) {
            this.gameManager.alertLayer.removeChild(this);
        }
    }
}