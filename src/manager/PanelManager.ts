/**
 * Created by Ace.C on 2016/4/15.
 */
class PanelManager extends BaseManager {

    public gather:any = {};
    public curPanel:BasePanel;

    public constructor() {
        super();
    }

    public initManager():void {

    }

    /**
     * 打开或者关闭
     * @param id
     */
    public openOrClose(id:any):void {
        var basePanel:BasePanel = this.gather[id];
        if (!basePanel) {
            return;
        }

        if (!basePanel.visible) {
            this.open(id);
        }
        else {
            this.close(id);
        }
    }

    /**
     * 打开
     * @param id
     */
    public open(id:any):void {
        var basePanel:BasePanel = this.gather[id];
        if (basePanel) {
            this.curPanel = basePanel;
            this.curPanel.open();
        }
    }

    /**
     * 关闭
     * @param id
     */
    public close(id:any):void {
        var basePanel:BasePanel = this.gather[id];
        basePanel.close();
    }

    /**
     * 关闭全部
     */
    public closeAll():void {
        var basePanel:BasePanel;
        for (var id in this.gather) {
            basePanel = this.gather[id];
            basePanel.close();
        }
    }
}