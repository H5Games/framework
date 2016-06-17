/**
 * Created by Ace.C on 2016/4/15.
 */
class GameManager extends GameEventDispatcher {

    private static _instance:GameManager;

    public static getInstance():GameManager {
        if (!this._instance) {
            this._instance = new GameManager();
        }
        return this._instance;
    }

    public sceneManager:SceneManager;
    public panelManager:PanelManager;
    public alertManager:AlertManager;

    public sceneLayer:eui.UILayer;
    public panelLayer:eui.UILayer;
    public alertLayer:eui.UILayer;
    public tipsLayer:eui.UILayer;

    public constructor() {
        super();

        this.initLayer();
        this.initManager();
    }

    public initLayer():void {
        this.sceneLayer = new eui.UILayer();
        core.stage.addChild(this.sceneLayer);

        this.panelLayer = new eui.UILayer();
        core.stage.addChild(this.panelLayer);

        this.alertLayer = new eui.UILayer();
        core.stage.addChild(this.alertLayer);

        this.tipsLayer = new eui.UILayer();
        core.stage.addChild(this.tipsLayer);
    }

    public initManager():void {
        this.alertManager = new AlertManager();
        this.panelManager = new PanelManager();
        this.sceneManager = new SceneManager();
    }
}