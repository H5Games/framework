/**
 * Created by Ace.C on 2016/4/15.
 */
class BasePanel extends BaseSprite {
    public constructor() {
        super();
    }

    public open():void {
        super.open();

        if (!this.gameManager.panelLayer.contains(this)) {
            this.gameManager.panelLayer.addChild(this);
        }
    }

    public close():void {
        super.close();

        if (this.gameManager.panelLayer.contains(this)) {
            this.gameManager.panelLayer.removeChild(this);
        }
    }
}