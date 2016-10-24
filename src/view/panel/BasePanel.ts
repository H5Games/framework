/**
 * Created by Ace.C on 2016/4/15.
 */
class BasePanel extends GameSprite {
    public constructor() {
        super();
    }

    public open():void {
        super.show();

        if (!this.gameManager.panelLayer.contains(this)) {
            this.gameManager.panelLayer.addChild(this);
        }
    }

    public close():void {
        super.hide();

        if (this.gameManager.panelLayer.contains(this)) {
            this.gameManager.panelLayer.removeChild(this);
        }
    }
}