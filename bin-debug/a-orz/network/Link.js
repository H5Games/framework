/**
 * Created by Ace.C on 2016/4/28.
 */
var network;
(function (network) {
    var Link = (function (_super) {
        __extends(Link, _super);
        function Link() {
            _super.call(this);
        }
        var d = __define,c=Link,p=c.prototype;
        Link.getInstance = function () {
            if (!this.instance) {
                this.instance = new network.Link();
            }
            return this.instance;
        };
        /**
         * ���ӷ�����
         * @param host
         * @param port
         */
        Link.connect = function (host, port) {
            this.host = host;
            this.port = port;
            switch (acore.linkType) {
                case config.LinkType.http:
                    break;
                case config.LinkType.socket:
                    this.bySocket.connect(host, port);
                    break;
            }
        };
        /**
         * ��������
         * @param data
         */
        Link.send = function (data) {
            switch (acore.linkType) {
                case config.LinkType.http:
                    this.byHttp.send(data);
                    break;
                case config.LinkType.socket:
                    this.bySocket.send(data);
                    break;
            }
        };
        d(Link, "connected"
            /**
             * �Ƿ��Ѿ�����
             * @returns {boolean}
             */
            ,function () {
                return this.bySocket.connected;
            }
        );
        //���ӳɹ�
        Link.Connect_Complete = "Connect_Complete";
        //���ճɹ�
        Link.Receive_Complete = "Receive_Complete";
        //�������󷽷�
        Link.method = egret.HttpMethod.POST;
        return Link;
    }(common.CustomEvent));
    network.Link = Link;
    egret.registerClass(Link,'network.Link');
})(network || (network = {}));
