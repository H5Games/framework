/**
 * Created by Ace.C on 2016/4/28.
 */
module net {
    export class Link extends event.CustomEvent {

        //连接成功
        public static Connect_Complete:string = "Connect_Complete";
        //接收成功
        public static Receive_Complete:string = "Receive_Complete";

        private static instance:net.Link;

        public static getInstance():net.Link {
            if (!this.instance) {
                this.instance = new net.Link();
            }
            return this.instance;
        }

        //http连接
        public static byHttp:LinkByHttp;
        //socket连接
        public static bySocket:LinkBySocket;

        //地址
        public static host:string;
        //端口
        public static port:number;
        //数据请求方法
        public static method:string = egret.HttpMethod.POST;

        public constructor() {
            super();
        }

        /**
         * 连接服务器
         * @param host
         * @param port
         */
        public static connect(host:string, port:number):void {
            this.host = host;
            this.port = port;

            switch (acore.linkType) {
                case config.LinkType.http:
                    break;
                case config.LinkType.socket:
                    this.bySocket.connect(host, port);
                    break;
            }
        }

        /**
         * 发送数据
         * @param data
         */
        public static send(data:any):void{
            switch (acore.linkType) {
                case config.LinkType.http:
                    this.byHttp.send(data);
                    break;
                case config.LinkType.socket:
                    this.bySocket.send(data);
                    break;
            }
        }

        /**
         * 是否已经连接
         * @returns {boolean}
         */
        public static get connected():boolean {
            return this.bySocket.connected;
        }
    }
}