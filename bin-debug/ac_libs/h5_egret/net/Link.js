/**
 * Created by Ace.C on 2016/4/28.
 */
var net;
(function (net) {
    var Link = (function (_super) {
        __extends(Link, _super);
        function Link() {
            _super.call(this);
        }
        var d = __define,c=Link,p=c.prototype;
        Link.getInstance = function () {
            if (!this.instance) {
                this.instance = new net.Link();
            }
            return this.instance;
        };
        /**
         * @param host
         * @param port
         */
        Link.connect = function (host, port) {
            this.host = host;
            this.port = port;
            switch (H5Core.linkType) {
                case LinkType.http:
                    break;
                case LinkType.socket:
                    this.bySocket.connect(host, port);
                    break;
            }
        };
        /**
         * @param data
         */
        Link.send = function (data) {
            switch (H5Core.linkType) {
                case LinkType.http:
                    this.byHttp.send(data);
                    break;
                case LinkType.socket:
                    this.bySocket.send(data);
                    break;
            }
        };
        d(Link, "connected"
            /**
             * @returns {boolean}
             */
            ,function () {
                return this.bySocket.connected;
            }
        );
        //连接完成
        Link.Connect_Complete = "Connect_Complete";
        //接收完成
        Link.Receive_Complete = "Receive_Complete";
        Link.method = egret.HttpMethod.POST;
        return Link;
    }(CommonEvent));
    net.Link = Link;
    egret.registerClass(Link,'net.Link');
})(net || (net = {}));
