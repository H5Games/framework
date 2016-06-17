/**
 * Created by Ace.C on 2016/3/29.
 */
var utils;
(function (utils) {
    /**
     * 游戏特效汇总
     */
    var EffectsUtils = (function () {
        function EffectsUtils() {
        }
        var d = __define,c=EffectsUtils,p=c.prototype;
        /**
         * 闪烁特效
         * @param display 旋转对象
         * @param type 类型
         * @param delay 间隔(单位:毫秒)
         */
        EffectsUtils.twinkle = function (display, type, delay) {
            if (type === void 0) { type = 1; }
            if (delay === void 0) { delay = 1000; }
            if (display == null)
                return;
            switch (type) {
                case 1:
                    egret.Tween.get(display, { loop: true }).to({ alpha: 0.5 }, delay).to({ alpha: 1.0 }, delay / 2);
                    break;
            }
        };
        /**
         * 缩放特效
         * @param display 旋转对象
         * @param type 类型
         * @param delay 间隔(单位:毫秒)
         */
        EffectsUtils.scaling = function (display, type, delay) {
            if (type === void 0) { type = 1; }
            if (delay === void 0) { delay = 1000; }
            if (display == null)
                return;
            switch (type) {
                case 1:
                    egret.Tween.get(display)
                        .to({ scaleX: 1.5, scaleY: 1.5 }, delay)
                        .to({ scaleX: 1.0, scaleY: 1.0 }, 50);
                    break;
                case 2:
                    egret.Tween.get(display)
                        .to({ scaleX: 0.5, scaleY: 0.5 }, delay)
                        .to({ scaleX: 1.0, scaleY: 1.0 }, 50);
                    break;
            }
        };
        /**
         * 旋转特效
         * @param display 旋转对象
         * @param type 类型
         * @param delay 间隔(单位:毫秒)
         */
        EffectsUtils.turning = function (display, type, delay) {
            if (type === void 0) { type = 1; }
            if (delay === void 0) { delay = 1000; }
            if (display == null)
                return;
            switch (type) {
                case 1:
                    egret.Tween.get(display, { loop: true }).to({ rotation: 360 }, delay).call(function () {
                        this.rotation = 0;
                    }, display);
                    break;
            }
        };
        /**
         * 浮动特效
         * @param display
         * @param type 类型
         * @param delay 间隔(单位:毫秒)
         * @param spacing 间距(单位:像素)
         */
        EffectsUtils.floating = function (display, type, delay, spacing) {
            if (type === void 0) { type = 1; }
            if (delay === void 0) { delay = 50; }
            if (spacing === void 0) { spacing = 50; }
            if (display == null)
                return;
            switch (type) {
                case 1:
                    egret.Tween.get(display, { loop: true }).to({ y: display.y + spacing }, delay).to({ y: display.y - spacing }, delay);
                    break;
                case 2:
                    break;
            }
        };
        /**
         * 摇动特效
         * @param display
         * @param type 类型
         * @param delay 间隔(单位:毫秒)
         * @param spacing 间距(单位:角度)
         */
        EffectsUtils.shaking = function (display, type, delay, spacing) {
            if (type === void 0) { type = 1; }
            if (delay === void 0) { delay = 50; }
            if (spacing === void 0) { spacing = 20; }
            if (display == null)
                return;
            switch (type) {
                case 1:
                    egret.Tween.get(display, { loop: true }).to({ rotation: spacing }, delay).to({ rotation: -spacing }, delay);
                    break;
                case 2:
                    var oldX = display.x;
                    egret.Tween.get(display)
                        .to({ x: display.x - 10 }, delay)
                        .to({ x: display.x + 20 }, delay)
                        .to({ x: display.x - 20 }, delay)
                        .to({ x: display.x + 20 }, delay)
                        .to({ x: oldX }, delay);
                    break;
                case 3:
                    var oldX = display.x;
                    var oldY = display.y;
                    egret.Tween.get(display)
                        .to({ x: display.x - 10, y: display.y }, delay)
                        .to({ x: display.x + 20, y: display.y }, delay)
                        .to({ x: display.x, y: display.y + 15 }, delay)
                        .to({ x: display.x, y: display.y - 20 }, delay)
                        .to({ x: display.x, y: display.y + 10 }, delay)
                        .to({ x: oldX, y: oldY }, delay);
                    break;
            }
        };
        return EffectsUtils;
    }());
    utils.EffectsUtils = EffectsUtils;
    egret.registerClass(EffectsUtils,'utils.EffectsUtils');
})(utils || (utils = {}));
