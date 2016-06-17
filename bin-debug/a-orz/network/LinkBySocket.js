/**
 * Created by Ace.C on 2016/4/28.
 */
var network;
(function (network) {
    var LinkBySocket = (function () {
        function LinkBySocket() {
            this.socket = new egret.WebSocket();
            this.socket.addEventListener(egret.Event.CONNECT, this.onConnect, this);
            this.socket.addEventListener(egret.Event.CLOSE, this.onClose, this);
            //this.socket.addEventListener(egret.Event.IO_ERROR, this.onError, this);
            this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceive, this);
        }
        var d = __define,c=LinkBySocket,p=c.prototype;
        p.onReceive = function (e) {
            network.Link.getInstance().dispatch(network.Link.Receive_Complete);
        };
        p.onConnect = function (e) {
            network.Link.getInstance().dispatch(network.Link.Connect_Complete);
        };
        p.onClose = function (e) {
        };
        p.onError = function (e) {
        };
        d(p, "connected"
            /**
             * �Ƿ��Ѿ�����
             * @returns {boolean}
             */
            ,function () {
                return this.socket.connected;
            }
        );
        /**
         * ����
         * @param host
         * @param port
         */
        p.connect = function (host, port) {
            this.socket.connect(host, port);
        };
        /**
         * д������
         * @param bytes
         * @param offset
         * @param length
         */
        p.writeBytes = function (bytes, offset, length) {
            this.socket.writeBytes(bytes, offset, length);
        };
        /**
         * ��ȡ����
         * @param length
         * @returns {egret.ByteArray}
         */
        p.readBytes = function (length) {
            var bytes = new egret.ByteArray();
            if (length) {
                this.socket.readBytes(bytes, 0, length);
            }
            else {
                this.socket.readBytes(bytes);
            }
            return bytes;
        };
        /**
         * ����
         */
        p.send = function (data) {
            var bytes = new egret.ByteArray();
            for (var key in data) {
                if (data[key] instanceof String) {
                }
                else if (data[key] instanceof Number) {
                }
                else if (data[key] instanceof Array) {
                }
            }
            this.socket.flush();
        };
        return LinkBySocket;
    }());
    network.LinkBySocket = LinkBySocket;
    egret.registerClass(LinkBySocket,'network.LinkBySocket');
})(network || (network = {}));
