/**
 * Created by Ace.C on 2016/4/15.
 */
module core {
    //舞台
    export var stage:egret.Stage;
    //游戏管理
    export var gameManager:GameManager;

    //是否可以播放音乐
    export var isBackgroundMusic:boolean = true;
    //是否可以播放音效
    export var isSoundEffect:boolean = true;

    //初始化
    export function init(stage:egret.Stage):void {
        core.stage = stage;

        core.gameManager = GameManager.getInstance();


    }
}