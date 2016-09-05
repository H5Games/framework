/**
 * Created by Ace.C on 2016/4/15.
 */
class GameManager extends CommonEvent {

    private static _instance: GameManager;

    public static getInstance(): GameManager {
        if (!this._instance) {
            this._instance = new GameManager();
        }
        return this._instance;
    }

    public sceneManager: SceneManager;
    public panelManager: PanelManager;
    public alertManager: AlertManager;

    public sceneLayer: eui.UILayer;
    public panelLayer: eui.UILayer;
    public alertLayer: eui.UILayer;
    public tipsLayer: eui.UILayer;
    public topLayer: eui.UILayer;

    public constructor() {
        super();
    }

    public initLayer(): void {
        this.sceneLayer = this.getNewLayer();
        this.panelLayer = this.getNewLayer();
        this.alertLayer = this.getNewLayer();
        this.tipsLayer = this.getNewLayer();
        this.topLayer = this.getNewLayer();
    }

    public initManager(): void {
        this.alertManager = new AlertManager();
        this.panelManager = new PanelManager();
        this.sceneManager = new SceneManager();
    }

    public getNewLayer() {
        var layer: eui.UILayer = new eui.UILayer();
        layer.top = 0;
        layer.bottom = 0;
        layer.left = 0;
        layer.right = 0;
        layer.touchEnabled = false;
        core.stage.addChild(layer);
        return layer;
    }
}