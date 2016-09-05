/**
 * H5Core
 * @Author Ace.c
 * @Create 2016-09-05 15:20
 */
class H5Core {

    //舞台
    public static stage: egret.Stage;
    //服务器连接方式
    public static linkType:LinkType;

    public constructor() {
    }

    public static init(stage: egret.Stage) {
        this.stage = stage;
    }

    //舞台宽度
    public static get stageWidth(): number {
        return this.stage.stageWidth
    }
    //舞台高度
    public static get stageHeight(): number {
        return this.stage.stageHeight;
    }
}