/**
 * Created by Ace.C on 2016/4/28.
 */
module net {
    export class Link extends CommonEvent {

        //���ӳɹ�
        public static Connect_Complete:string = "Connect_Complete";
        //���ճɹ�
        public static Receive_Complete:string = "Receive_Complete";

        private static instance:net.Link;

        public static getInstance():net.Link {
            if (!this.instance) {
                this.instance = new net.Link();
            }
            return this.instance;
        }

        //http����
        public static byHttp:LinkByHttp;
        //socket����
        public static bySocket:LinkBySocket;

        //��ַ
        public static host:string;
        //�˿�
        public static port:number;
        //�������󷽷�
        public static method:string = egret.HttpMethod.POST;

        public constructor() {
            super();
        }

        /**
         * ���ӷ�����
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
         * ��������
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
         * �Ƿ��Ѿ�����
         * @returns {boolean}
         */
        public static get connected():boolean {
            return this.bySocket.connected;
        }
    }
}