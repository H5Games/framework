var SocketManager = (function (_super) {
    __extends(SocketManager, _super);
    function SocketManager() {
        _super.call(this);
        this.webSocket = new egret.WebSocket();
        this.webSocket.type = egret.WebSocket.TYPE_BINARY;
        this.webSocket.addEventListener(egret.Event.CONNECT, this.onConnected, this);
        this.webSocket.addEventListener(egret.Event.CLOSE, this.onClosed, this);
        this.webSocket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onError, this);
        this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onUpdate, this);
    }
    var d = __define,c=SocketManager,p=c.prototype;
    /**
     * 获取SocketManager的唯一单例
     * @returns {SocketManager}
     */
    SocketManager.getInstance = function () {
        if (!this.instance) {
            this.instance = new SocketManager();
        }
        return this.instance;
    };
    /**
     * 连接成功
     */
    p.onConnected = function () {
        var sendChannel = Global.channel;
        if (sendChannel == 'facebook' && Global.window['awyd']) {
            sendChannel = 'awyd';
        }
        MsgSender.sendAction_1(sendChannel, Global.openid, Global.openkey);
        this.dispatchEvent(SocketManager.CONNECTED);
    };
    /**
     * 连接关闭
     */
    p.onClosed = function () {
        EventListenerManager.sendEvent(ManagerOffLine.openOffLinePanel);
        this.dispatchEvent(SocketManager.CLOSED);
    };
    /**
     * 连接错误
     */
    p.onError = function () {
        this.dispatchEvent(SocketManager.ERROR);
    };
    /**
     * 更新数据
     */
    p.onUpdate = function () {
        var ba = new egret.ByteArray();
        this.webSocket.readBytes(ba);
        MsgHandler.update(ba);
        this.dispatchEvent(SocketManager.UPDATE);
    };
    /**
     * 连接
     * @param host
     * @param port
     */
    p.connect = function (host, port) {
        this.webSocket.connect(host, port);
    };
    /**
     * 连接
     * @param url
     */
    p.connectByUrl = function (url) {
        this.webSocket.connectByUrl(url);
    };
    /**
     * 发送数据
     * @param action
     * @param ba
     */
    p.send = function (ba) {
        this.webSocket.writeBytes(ba);
        this.webSocket.flush();
    };
    SocketManager.instance = null;
    //连接成功
    SocketManager.CONNECTED = "CONNECTED";
    //连接关闭
    SocketManager.CLOSED = "CLOSED";
    //连接错误
    SocketManager.ERROR = "ERROR";
    //更新数据
    SocketManager.UPDATE = "UPDATE";
    return SocketManager;
}(CommonEvent));
egret.registerClass(SocketManager,'SocketManager');
