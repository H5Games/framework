/**
 * Created by Ace.C on 2016/4/1.
 */
module utils {

    /**
     * 工厂工具
     */
    export class FactoryUtils {

        /**
         * 获取一个TextField
         */
        public static getTextfield(align:string = "left", color:number = 0xffffff, bold:boolean = false):egret.TextField {
            var tf:egret.TextField = new egret.TextField();
            tf.textAlign = align;
            tf.textColor = color;
            tf.bold = bold;
            tf.multiline = true;
            tf.wordWrap = true;
            return tf;
        }

        /**
         * 获取一个MovieClip
         */
        public static getMovieclip(name:string):egret.MovieClip {
            var factory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory(RES.getRes(name + "_json"), RES.getRes(name + "_img"));
            return new egret.MovieClip(factory.generateMovieClipData());
        }
    }
}