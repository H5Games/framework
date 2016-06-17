/**
 * Created by Ace.C on 2016/4/15.
 */
class AlertManager extends BaseManager {

    public gather:any = {};
    public curAlert:BaseAlert;

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
        var baseAlert:BaseAlert = this.gather[id];
        if (!baseAlert) {
            return;
        }

        if (!baseAlert.visible) {
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
        var baseAlert:BaseAlert = this.gather[id];
        if (baseAlert) {
            this.curAlert = baseAlert;
            this.curAlert.open();
        }
    }

    /**
     * 关闭
     * @param id
     */
    public close(id:any):void {
        var baseAlert:BaseAlert = this.gather[id];
        baseAlert.close();
    }

    /**
     * 关闭全部
     */
    public closeAll():void {
        var baseAlert:BaseAlert;
        for (var id in this.gather) {
            baseAlert = this.gather[id];
            baseAlert.close();
        }
    }
}