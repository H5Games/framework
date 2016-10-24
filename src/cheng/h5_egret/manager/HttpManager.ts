class HttpManager extends CommonEvent {

    private static instance: HttpManager = null;

    /**
     * HttpManager
     * @returns {HttpManager}
     */
    public static getInstance(): HttpManager {
        if (!this.instance) {
            this.instance = new HttpManager();
        }

        return this.instance;
    }

    public constructor() {
        super();
    }

    public send(url: string, param: string, callback: Function = null, thisObj: any = null): void {
        if (!url || url == "")return;

        var loader: egret.URLLoader = new egret.URLLoader();
        loader.dataFormat = egret.URLLoaderDataFormat.TEXT;

        var request: egret.URLRequest = new egret.URLRequest(url);
        request.method = egret.URLRequestMethod.POST;
        request.data = new egret.URLVariables(param);

        loader.addEventListener(egret.Event.COMPLETE, function (event: egret.Event) {
            var loader: egret.URLLoader = <egret.URLLoader>event.target;
            if (!loader)return;

            var data: egret.URLVariables = loader.data;
            if (!data)return;

            var obj: any = JSON.parse(data.toString());
            if (!obj)return;

            console.log("ReadData <=== " + data.toString());

            if (callback) {
                if (thisObj) {
                    callback.call(thisObj, obj);
                }
                else {
                    callback(obj);
                }
            }
        }, this);

        loader.load(request);
    }
}