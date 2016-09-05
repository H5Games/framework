/**
 * Created by Ace.C on 2016/5/16.
 */
module net {
    export class Socket extends GameEventDispatcher {
        public static Connect_Start:string = "Socket_Connect_Start";
        public static Connect_End:string = "Socket_Connect_End";

        private socket:egret.WebSocket;

        public constructor() {
            super();
        }
    }
}