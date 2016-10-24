var HttpManager = (function (_super) {
    __extends(HttpManager, _super);
    function HttpManager() {
        _super.call(this);
    }
    var d = __define,c=HttpManager,p=c.prototype;
    /**
     * HttpManager
     * @returns {HttpManager}
     */
    HttpManager.getInstance = function () {
        if (!this.instance) {
            this.instance = new HttpManager();
        }
        return this.instance;
    };
    p.send = function (url, param, callback, thisObj) {
        if (callback === void 0) { callback = null; }
        if (thisObj === void 0) { thisObj = null; }
        if (!url || url == "")
            return;
        var loader = new egret.URLLoader();
        loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        var request = new egret.URLRequest(url);
        request.method = egret.URLRequestMethod.POST;
        request.data = new egret.URLVariables(param);
        loader.addEventListener(egret.Event.COMPLETE, function (event) {
            var loader = event.target;
            if (!loader)
                return;
            var data = loader.data;
            if (!data)
                return;
            var obj = JSON.parse(data.toString());
            if (!obj)
                return;
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
    };
    HttpManager.instance = null;
    return HttpManager;
}(CommonEvent));
egret.registerClass(HttpManager,'HttpManager');
