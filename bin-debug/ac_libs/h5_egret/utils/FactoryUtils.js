/**
 * 工厂工具
 * @Author Ace
 * @Create 2016-09-04 14:34
 */
var FactoryUtils = (function () {
    function FactoryUtils() {
    }
    var d = __define,c=FactoryUtils,p=c.prototype;
    /**
     * 获取一个Label
     */
    FactoryUtils.getLabel = function (align, color, bold, multiline, wordWrap) {
        if (align === void 0) { align = "left"; }
        if (color === void 0) { color = 0xffffff; }
        if (bold === void 0) { bold = false; }
        if (multiline === void 0) { multiline = true; }
        if (wordWrap === void 0) { wordWrap = true; }
        var label = new eui.Label();
        label.textAlign = align;
        label.textColor = color;
        label.bold = bold;
        label.multiline = multiline;
        label.wordWrap = wordWrap;
        return label;
    };
    /**
     * 获取一个TextField
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
     */
    FactoryUtils.getMovieclip = function (name) {
        var RJson = RES.getRes(name + "_json");
        var RImg = RES.getRes(name + "_img");
        if (RJson && RImg) {
            var factory = new egret.MovieClipDataFactory(RJson, RImg);
            return new egret.MovieClip(factory.generateMovieClipData());
        }
        else {
            return null;
        }
    };
    return FactoryUtils;
}());
egret.registerClass(FactoryUtils,'FactoryUtils');
