/**
 * 游戏事件
 * @Author Ace.c
 * @Time 2016-06-16 14:08
 */
class GameEventDispatcher {
    //集合
    private callbackGather:any = {};

    public constructor() {
        this.callbackGather = {};
    }

    /**
     * 注册事件
     * @param type
     * @param callback
     * @param thisObj
     */
    public registEvent(type:any, callback:Function, thisObj:any):void {
        if (this.checkCallbackIsExist(type, callback, thisObj)) {
            return;
        }

        var list:any[] = this.getCallbackList(type);
        list.push({"callback": callback, "thisObj": thisObj});
    }

    /**
     * 移除事件
     * @param type
     * @param callback
     * @param thisObj
     */
    public removeEvent(type:any, callback:Function, thisObj:any):void {
        if (!this.checkCallbackIsExist(type, callback, thisObj)) {
            return;
        }

        var list:any[] = this.getCallbackList(type);
        var temp:any;
        for (var i:number = 0; i < list.length; i++) {
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
     * @param data
     */
    public dispatchEvent(type:any, data?:any):void {
        var list:any[] = this.getCallbackList(type);
        var temp:any;
        for (var i:number = 0; i < list.length; i++) {
            temp = list[i];
            temp["callback"].call(temp["thisObj"], data);
        }
    }

    /**
     * 获取回调列表
     * @param type
     * @returns {Function[]}
     */
    private getCallbackList(type:any):Function[] {
        var list:any[] = [];
        if (this.callbackGather.hasOwnProperty(type)) {
            list = this.callbackGather[type];
        }
        else {
            this.callbackGather[type] = list;
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
    private checkCallbackIsExist(type:any, callback:Function, thisObj:any):boolean {
        var isExist:boolean = false;
        var list:any[] = this.getCallbackList(type);
        var temp:any;
        for (var i:number = 0; i < list.length; i++) {
            temp = list[i];
            if (temp["callback"] == callback && temp["thisObj"] == thisObj) {
                isExist = true;
                break;
            }
        }
        return isExist;
    }
}