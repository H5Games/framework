/**
 * Created by Ace.C on 2016/4/21.
 */
var utils;
(function (utils) {
    var SoundUtils = (function () {
        function SoundUtils() {
        }
        var d = __define,c=SoundUtils,p=c.prototype;
        /**
         * ���ű�������
         * @param id
         * @param vol
         * @param loops
         * @param start
         */
        SoundUtils.playBgm = function (id, vol, loops, start, isReplay) {
            if (id === void 0) { id = null; }
            if (vol === void 0) { vol = 1.0; }
            if (loops === void 0) { loops = 1; }
            if (start === void 0) { start = 0; }
            if (isReplay === void 0) { isReplay = false; }
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
            function replay() {
                if (JSON.parse(id) == 14013 || JSON.parse(id) == 14014) {
                    this.playBgm(id, vol, loops, start);
                }
                else {
                    this.playBgm(null, vol, loops, start, true);
                }
            }
            function play() {
                _this.closeBgm();
                _this.bgmChannel = _this.bgm.play(start, loops);
                _this.bgmChannel.volume = vol;
                _this.bgmChannel.addEventListener(egret.Event.SOUND_COMPLETE, replay, _this);
            }
            egret.setTimeout(play, _this, _this.bgmItvs[_this.bgmItvIndex] * 1000);
        };
        /**
         * �رձ�������
         */
        SoundUtils.closeBgm = function () {
            if (this.bgmChannel) {
                this.bgmChannel.stop();
            }
        };
        /**
         * ������Ч
         * @param id
         * @param vol
         * @param loops
         * @param start
         */
        SoundUtils.playSe = function (id, vol, loops, start) {
            if (vol === void 0) { vol = 0.7; }
            if (loops === void 0) { loops = 1; }
            if (start === void 0) { start = 0; }
            if (!core.isSoundEffect) {
                return;
            }
            var se = RES.getRes(id);
            var seChannel = se.play(start, loops);
            seChannel.volume = vol;
            seChannel.addEventListener(egret.Event.SOUND_COMPLETE, function (e) {
                se = null;
                seChannel = null;
            }, this);
        };
        //�������ֲ��ż��𼯺�
        SoundUtils.bgmItvs = [0, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
        //�������ֲ��ż�������
        SoundUtils.bgmItvIndex = -1;
        return SoundUtils;
    }());
    utils.SoundUtils = SoundUtils;
    egret.registerClass(SoundUtils,'utils.SoundUtils');
})(utils || (utils = {}));
