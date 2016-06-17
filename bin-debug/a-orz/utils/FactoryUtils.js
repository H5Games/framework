/**
 * Created by Ace.C on 2016/4/1.
 */
var utils;
(function (utils) {
    /**
     * 工厂工具
     */
    var FactoryUtils = (function () {
        function FactoryUtils() {
        }
        var d = __define,c=FactoryUtils,p=c.prototype;
        /**
         * 获取一个TextField
         * @param align
         * @param bold
         * @param color
         * @returns {egret.TextField}
         */
        FactoryUtils.getTextfield = function (align, color, bold) {
            if (align === void 0) { align = "left"; }
            if (color === void 0) { color = 0xffffff; }
            if (bold === void 0) { bold = false; }
            var tf = new egret.TextField();
            tf.textAlign = align;
            tf.textColor = color;
            tf.bold = bold;
            tf.multiline = true;
            tf.wordWrap = true;
            return tf;
        };
        /**
         * 获取一个MovieClip
         * @param name
         * @returns {egret.MovieClip}
         */
        FactoryUtils.getMovieclip = function (name) {
            var factory = new egret.MovieClipDataFactory(RES.getRes(name + "_json"), RES.getRes(name + "_img"));
            return new egret.MovieClip(factory.generateMovieClipData());
        };
        return FactoryUtils;
    }());
    utils.FactoryUtils = FactoryUtils;
    egret.registerClass(FactoryUtils,'utils.FactoryUtils');
})(utils || (utils = {}));
