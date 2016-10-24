/**
 * Created by Ace.C on 2016/4/28.
 */
var net;
(function (net) {
    /**
     * ͨ��http����
     */
    var LinkByHttp = (function () {
        function LinkByHttp() {
            this.http = new egret.HttpRequest();
            this.http.responseType = egret.HttpResponseType.TEXT;
            this.http.addEventListener(egret.Event.COMPLETE, this.onCOMPLETE, this);
            //this.http.addEventListener(egret.Event.IO_ERROR, this.onIO_ERROR, this);
            this.http.addEventListener(egret.ProgressEvent.PROGRESS, this.onPROGRESS, this);
        }
        var d = __define,c=LinkByHttp,p=c.prototype;
        p.onCOMPLETE = function (e) {
        };
        p.onIO_ERROR = function (e) {
        };
        p.onPROGRESS = function (e) {
        };
        /**
         * ����
         */
        p.send = function (data) {
            this.http.open(net.Link.host + ":" + net.Link.port, net.Link.method);
            this.http.send(data);
        };
        return LinkByHttp;
    }());
    net.LinkByHttp = LinkByHttp;
    egret.registerClass(LinkByHttp,'net.LinkByHttp');
})(net || (net = {}));
