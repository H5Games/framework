/**
 * CommonEvent
 * @Author Ace
 * @Create 2016-09-04 14:34
 */
class CommonEvent extends egret.EventDispatcher {

    private eventObjs: any = {};

    public constructor() {
        super();

        this.eventObjs = {};
    }

    /**
     * 注册事件
     * @param type
     * @param callback
     * @param thisObj
     */
    public registEvent(type: any, callback: Function, thisObj: any): void {
        if (this.checkCallbackIsExist(type, callback, thisObj)) {
            return;
        }

        var list: any[] = this.getCallbackList(type);
        list.push({"callback": callback, "thisObj": thisObj});
    }

    /**
     * 移除事件
     * @param type
     * @param callback
     * @param thisObj
     */
    public removeEvent(type: any, callback: Function, thisObj: any): void {
        if (!this.checkCallbackIsExist(type, callback, thisObj)) {
            return;
        }

        var list: any[] = this.getCallbackList(type);
        var temp: any;
        for (var i: number = 0; i < list.length; i++) {
            temp = list[i];
            if (temp["callback"] == callback && temp["thisObj"] == thisObj) {
                list.splice(i, 1);
                break;
            }
        }
    }

    /**
     * 广播事件
     * @param type
     * @param args
     */
    public dispatch(type: any, args?: any): void {
        var list: any[] = this.getCallbackList(type);
        var temp: any;
        for (var i: number = 0; i < list.length; i++) {
            temp = list[i];
            temp["callback"].call(temp["thisObj"], args);
        }
    }

    /**
     * 获取回调列表
     * @param type
     * @returns {Function[]}
     */
    private getCallbackList(type: any): Function[] {
        var list: any[] = [];
        if (this.eventObjs.hasOwnProperty(type)) {
            list = this.eventObjs[type];
        }
        else {
            this.eventObjs[type] = list;
        }
        return list;
    }

    /**
     * 检测回调函数是否已经存在
     * @param type
     * @param callback
     * @param thisObj
     * @returns {boolean}
     */
    private checkCallbackIsExist(type: any, callback: Function, thisObj: any): boolean {
        var isExist: boolean = false;
        var list: any[] = this.getCallbackList(type);
        var temp: any;
        for (var i: number = 0; i < list.length; i++) {
            temp = list[i];
            if (temp["callback"] == callback && temp["thisObj"] == thisObj) {
                isExist = true;
                break;
            }
        }
        return isExist;
    }
}