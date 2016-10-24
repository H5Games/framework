/**
 * Created by Ace.C on 2016/5/16.
 */
var net;
(function (net) {
    var Socket = (function (_super) {
        __extends(Socket, _super);
        function Socket() {
            _super.call(this);
        }
        var d = __define,c=Socket,p=c.prototype;
        Socket.Connect_Start = "Socket_Connect_Start";
        Socket.Connect_End = "Socket_Connect_End";
        return Socket;
    }(CommonEvent));
    net.Socket = Socket;
    egret.registerClass(Socket,'net.Socket');
})(net || (net = {}));
