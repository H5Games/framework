/**
 * Created by Ace.C on 2016/4/28.
 */
module net{
    /**
     * 通过http连接
     */
    export class LinkByHttp{

        public http:egret.HttpRequest;

        public constructor(){
            this.http = new egret.HttpRequest();
            this.http.responseType = egret.HttpResponseType.TEXT;
            this.http.addEventListener(egret.Event.COMPLETE, this.onCOMPLETE, this);
            //this.http.addEventListener(egret.Event.IO_ERROR, this.onIO_ERROR, this);
            this.http.addEventListener(egret.ProgressEvent.PROGRESS, this.onPROGRESS, this);
        }

        private onCOMPLETE(e:egret.Event):void{

        }

        private onIO_ERROR(e:egret.Event):void{

        }

        private onPROGRESS(e:egret.ProgressEvent):void{

        }

        /**
         * 发送
         */
        public send(data:any):void {
            this.http.open(Link.host + ":" + Link.port, Link.method);
            this.http.send(data);
        }
    }
}