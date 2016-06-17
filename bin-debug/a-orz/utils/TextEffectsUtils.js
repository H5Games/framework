var utils;
(function (utils) {
    /**
     * text tips 特效汇总
     */
    var TextEffectsUtils = (function () {
        function TextEffectsUtils() {
        }
        var d = __define,c=TextEffectsUtils,p=c.prototype;
        /**
         * 打字机特效
         * @param display 文本对象
         * @param content 文本内容
         * @param delay 打字间隔(单位:毫秒)
         */
        TextEffectsUtils.typewriter = function (display, content, delay) {
            if (content === void 0) { content = ""; }
            if (delay === void 0) { delay = 50; }
            var strArr = content.split("");
            for (var i = 0; i < strArr.length; i++) {
                egret.setTimeout(function () {
                    display.appendText(strArr[Number(this)]);
                }, i, delay * i);
            }
        };
        /**
         * 数字滚动特效
         * @param display 文本对象
         * @param target 目标数字
         * @param delay 打字间隔(单位:毫秒)
         */
        TextEffectsUtils.numberRolling = function (display, target, delay) {
            if (delay === void 0) { delay = 2000; }
            //var cur:number = Number(display.text);
            this.rollingStart = 0;
            function onChange() {
                //display.text = Math.round(cur).toString();
                console.log(Math.round(this.rollingStart));
            }
            egret.Tween.get(this, { onChange: onChange, onChangeObj: this }).to({ rollingStart: target }, delay);
        };
        /**
         * 提示特效
         * @param content 提示内容
         * @param type 类型 1：从下到上弹出 2：从左至右弹出 3：从右至左弹出 4：从中间弹出渐渐消失 5：从大变小 等等
         * @param isWarning 是否是警告，警告是红色
         */
        TextEffectsUtils.showTips = function (content, type, isWarning) {
            if (content === void 0) { content = ""; }
            if (type === void 0) { type = 1; }
            if (isWarning === void 0) { isWarning = false; }
            switch (type) {
                case 1:
                    this.showTipsDownToUp(content, isWarning);
                    break;
                case 2:
                    this.showTipsLeftOrRight(content, isWarning, true);
                    break;
                case 3:
                    this.showTipsLeftOrRight(content, isWarning, false);
                    break;
                case 4:
                    this.showTipsFromCenter(content, isWarning);
                    break;
                case 5:
                    this.showTipsBigToSmall(content, isWarning);
                    break;
                default:
                    break;
            }
        };
        //从下到上弹出
        TextEffectsUtils.showTipsDownToUp = function (str, isWarning) {
            if (str === void 0) { str = ""; }
            if (isWarning === void 0) { isWarning = false; }
            var effectTips = new egret.TextField();
            effectTips.size = 24;
            effectTips.y = acore.stageHeight / 2;
            if (isWarning) {
                effectTips.textColor = config.TextColor.red;
            }
            else {
                effectTips.textColor = config.TextColor.green;
            }
            effectTips.alpha = 0;
            effectTips.text = str;
            effectTips.strokeColor = 0x000000;
            effectTips.x = acore.stageWidth / 2 - effectTips.width / 2;
            effectTips.stroke = 2;
            effectTips.bold = true;
            effectTips.textAlign = egret.HorizontalAlign.CENTER;
            if (!acore.stage.contains(effectTips)) {
                acore.stage.addChild(effectTips);
            }
            var onComplete2 = function () {
                if (acore.stage.contains(effectTips)) {
                    acore.stage.removeChild(effectTips);
                    effectTips = null;
                }
            };
            var onComplete1 = function () {
                egret.Tween.get(effectTips).to({ alpha: 0 }, 500).call(onComplete2, this);
            };
            effectTips.visible = true;
            egret.Tween.get(effectTips).to({
                y: effectTips.y - 120,
                alpha: 1
            }, 800, egret.Ease.backOut).call(onComplete1, this);
        };
        //从左至右 或者 从右至左
        TextEffectsUtils.showTipsLeftOrRight = function (str, isWarning, isFromeLeft) {
            if (str === void 0) { str = ""; }
            if (isWarning === void 0) { isWarning = false; }
            if (isFromeLeft === void 0) { isFromeLeft = true; }
            var effectTips = new egret.TextField();
            effectTips.size = 24;
            effectTips.y = acore.stageHeight / 2;
            if (isWarning) {
                effectTips.textColor = config.TextColor.red;
            }
            else {
                effectTips.textColor = config.TextColor.green;
            }
            effectTips.alpha = 0;
            effectTips.text = str;
            effectTips.strokeColor = 0x000000;
            if (isFromeLeft) {
                effectTips.x = -effectTips.width;
            }
            else {
                effectTips.x = acore.stageWidth;
            }
            effectTips.stroke = 2;
            effectTips.bold = true;
            effectTips.textAlign = egret.HorizontalAlign.CENTER;
            if (!acore.stage.contains(effectTips)) {
                acore.stage.addChild(effectTips);
            }
            if (isFromeLeft) {
                egret.Tween.get(effectTips).to({
                    x: acore.stageWidth / 2 - effectTips.width / 2 - 50,
                    alpha: 1
                }, 300, egret.Ease.sineInOut);
            }
            else {
                egret.Tween.get(effectTips).to({
                    x: acore.stageWidth / 2 - effectTips.width / 2 + 50,
                    alpha: 1
                }, 300, egret.Ease.sineInOut);
            }
            egret.setTimeout(function () {
                if (isFromeLeft) {
                    egret.Tween.get(effectTips).to({ x: effectTips.x + 100 }, 500);
                }
                else {
                    egret.Tween.get(effectTips).to({ x: effectTips.x - 100 }, 500);
                }
            }, this, 300);
            egret.setTimeout(function () {
                if (isFromeLeft) {
                    egret.Tween.get(effectTips).to({ x: acore.stageWidth }, 300, egret.Ease.sineIn);
                }
                else {
                    egret.Tween.get(effectTips).to({ x: -effectTips.width }, 300, egret.Ease.sineIn);
                }
            }, this, 800);
            egret.setTimeout(function () {
                if (acore.stage.contains(effectTips)) {
                    acore.stage.removeChild(effectTips);
                    effectTips = null;
                }
            }, this, 1100);
        };
        //从里到外
        TextEffectsUtils.showTipsFromCenter = function (str, isWarning) {
            if (str === void 0) { str = ""; }
            if (isWarning === void 0) { isWarning = false; }
            var effectTips = new egret.TextField();
            effectTips.size = 24;
            effectTips.y = acore.stageHeight / 2;
            if (isWarning) {
                effectTips.textColor = config.TextColor.red;
            }
            else {
                effectTips.textColor = config.TextColor.green;
            }
            effectTips.alpha = 0;
            effectTips.text = str;
            effectTips.strokeColor = 0x000000;
            effectTips.x = acore.stageWidth / 2;
            effectTips.stroke = 2;
            effectTips.bold = true;
            effectTips.textAlign = egret.HorizontalAlign.CENTER;
            effectTips.anchorOffsetX = effectTips.width >> 1;
            effectTips.anchorOffsetY = effectTips.height >> 1;
            effectTips.scaleX = 0;
            effectTips.scaleY = 0;
            if (!acore.stage.contains(effectTips)) {
                acore.stage.addChild(effectTips);
            }
            var onComplete2 = function () {
                if (acore.stage.contains(effectTips)) {
                    acore.stage.removeChild(effectTips);
                    effectTips = null;
                }
            };
            egret.Tween.get(effectTips).to({ scaleX: 1, scaleY: 1, alpha: 1 }, 200);
            egret.setTimeout(function () {
                egret.Tween.get(effectTips).to({ alpha: 0 }, 500).call(onComplete2, this);
            }, this, 1000);
        };
        //从外到里
        TextEffectsUtils.showTipsBigToSmall = function (str, isWarning) {
            if (str === void 0) { str = ""; }
            if (isWarning === void 0) { isWarning = false; }
            var effectTips = new egret.TextField();
            effectTips.size = 24;
            effectTips.y = acore.stageHeight / 2;
            if (isWarning) {
                effectTips.textColor = config.TextColor.red;
            }
            else {
                effectTips.textColor = config.TextColor.green;
            }
            effectTips.alpha = 0;
            effectTips.text = str;
            effectTips.strokeColor = 0x000000;
            effectTips.x = acore.stageWidth / 2;
            effectTips.stroke = 2;
            effectTips.bold = true;
            effectTips.textAlign = egret.HorizontalAlign.CENTER;
            effectTips.anchorOffsetX = effectTips.width >> 1;
            effectTips.anchorOffsetY = effectTips.height >> 1;
            effectTips.scaleX = 4;
            effectTips.scaleY = 4;
            if (!acore.stage.contains(effectTips)) {
                acore.stage.addChild(effectTips);
            }
            var onComplete2 = function () {
                if (acore.stage.contains(effectTips)) {
                    acore.stage.removeChild(effectTips);
                    effectTips = null;
                }
            };
            egret.Tween.get(effectTips).to({ scaleX: 1, scaleY: 1, alpha: 1 }, 200);
            egret.setTimeout(function () {
                egret.Tween.get(effectTips).to({ alpha: 0 }, 500).call(onComplete2, this);
            }, this, 1000);
        };
        return TextEffectsUtils;
    }());
    utils.TextEffectsUtils = TextEffectsUtils;
    egret.registerClass(TextEffectsUtils,'utils.TextEffectsUtils');
})(utils || (utils = {}));
