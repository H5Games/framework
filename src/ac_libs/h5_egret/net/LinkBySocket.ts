/**
 * Created by Ace.C on 2016/4/28.
 */
module net {
    export class LinkBySocket {

        private socket:egret.WebSocket;

        public constructor() {
            this.socket = new egret.WebSocket();
            this.socket.addEventListener(egret.Event.CONNECT, this.onConnect, this);
            this.socket.addEventListener(egret.Event.CLOSE, this.onClose, this);
            //this.socket.addEventListener(egret.Event.IO_ERROR, this.onError, this);
            this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceive, this);
        }

        public onReceive(e:egret.ProgressEvent):void {
            Link.getInstance().dispatch(Link.Receive_Complete);
        }

        public onConnect(e:egret.Event):void {
            Link.getInstance().dispatch(Link.Connect_Complete);
        }

        public onClose(e:egret.Event):void {
        }

        public onError(e:egret.Event):void {
        }

        /**
         * 是否已经连接
         * @returns {boolean}
         */
        public get connected():boolean {
            return this.socket.connected;
        }

        /**
         * 连接
         * @param host
         * @param port
         */
        public connect(host?:string, port?:number):void {
            this.socket.connect(host, port);
        }

        /**
         * 写入数据
         * @param bytes
         * @param offset
         * @param length
         */
        public writeBytes(bytes:egret.ByteArray, offset?:number, length?:number):void {
            this.socket.writeBytes(bytes, offset, length);
        }

        /**
         * 读取数据
         * @param length
         * @returns {egret.ByteArray}
         */
        public readBytes(length?:number):egret.ByteArray {
            var bytes:egret.ByteArray = new egret.ByteArray();
            if (length) {
                this.socket.readBytes(bytes, 0, length);
            }
            else {
                this.socket.readBytes(bytes);
            }
            return bytes;
        }

        /**
         * 发送
         */
        public send(data:any):void {
            var bytes:egret.ByteArray = new egret.ByteArray();
            for (var key in data) {
                if (data[key] instanceof String) {
                }
                else if (data[key] instanceof Number) {

                }
                else if (data[key] instanceof Array) {

                }
            }
            this.socket.flush();
        }
    }
}