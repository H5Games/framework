/**
 * Created by Ace.C on 2016/4/21.
 */
module utils {
    export class SoundUtils {

        private static bgmItvs:number[] = [0, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
        private static bgmItvIndex:number = -1;

        private static bgm:egret.Sound;
        private static bgmChannel:egret.SoundChannel;

        //是否暂停
        private static isStop:boolean;

        /**
         * 播放音乐
         * @param id
         * @param vol
         * @param loops
         * @param start
         */
        public static playBgm(id:string = null, vol:number = 1.0, loops:number = 1, start:number = 0, isReplay:boolean = false):void {
            if (!core.isBackgroundMusic) {
                return;
            }

            if (this.isStop) {
                this.isStop = false;
                return;
            }

            if (isReplay && this.bgmItvIndex < this.bgmItvs.length - 1) {
                this.bgmItvIndex++;
            }
            else {
                this.bgmItvIndex = 0;
            }

            this.bgm = RES.getRes(id);

            if (!this.bgm) {
                return;
            }

            var _this = this;

            function replay():void {
                if (JSON.parse(id) == 14013 || JSON.parse(id) == 14014) {
                    this.playBgm(id, vol, loops, start);
                }
                else {
                    this.playBgm(null, vol, loops, start, true);
                }
            }

            function play():void {
                _this.closeBgm();
                _this.bgmChannel = _this.bgm.play(start, loops);
                _this.bgmChannel.volume = vol;

                _this.bgmChannel.addEventListener(egret.Event.SOUND_COMPLETE, replay, _this);
            }

            egret.setTimeout(play, _this, _this.bgmItvs[_this.bgmItvIndex] * 1000);
        }

        /**
         * 关闭音乐
         */
        public static closeBgm():void {
            if (this.bgmChannel) {
                this.bgmChannel.stop();
            }
        }

        /**
         * 播放音效
         * @param id
         * @param vol
         * @param loops
         * @param start
         */
        public static playSe(id:string, vol:number = 0.7, loops:number = 1, start:number = 0):void {
            if (!core.isSoundEffect) {
                return;
            }

            var se:egret.Sound = RES.getRes(id);

            var seChannel:egret.SoundChannel = se.play(start, loops);
            seChannel.volume = vol;

            seChannel.addEventListener(egret.Event.SOUND_COMPLETE, function (e:egret.Event) {
                se = null;
                seChannel = null;
            }, this);
        }
    }
}