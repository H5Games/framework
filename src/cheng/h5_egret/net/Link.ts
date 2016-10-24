/**
 * Created by Ace.C on 2016/4/28.
 */
module net {
    export class Link extends CommonEvent {

        private static instance:net.Link;

        public static getInstance():net.Link {
            if (!this.instance) {
                this.instance = new net.Link();
            }
            return this.instance;
        }

        //连接完成
        public static Connect_Complete:string = "Connect_Complete";
        //接收完成
        public static Receive_Complete:string = "Receive_Complete";

        //http连接
        public static byHttp:LinkByHttp;
        //socket连接
        public static bySocket:LinkBySocket;

        public static host:string;
        public static port:number;
        public static method:string = egret.HttpMethod.POST;

        public constructor() {
            super();
        }

        /**
         * @param host
         * @param port
         */
        public static connect(host:string, port:number):void {
            this.host = host;
            this.port = port;

            switch (H5Core.linkType) {
                case LinkType.http:
                    break;
                case LinkType.socket:
                    this.bySocket.connect(host, port);
                    break;
            }
        }

        /**
         * @param data
         */
        public static send(data:any):void{
            switch (H5Core.linkType) {
                case LinkType.http:
                    this.byHttp.send(data);
                    break;
                case LinkType.socket:
                    this.bySocket.send(data);
                    break;
            }
        }

        /**
         * @returns {boolean}
         */
        public static get connected():boolean {
            return this.bySocket.connected;
        }
    }
}