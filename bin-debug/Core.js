/**
 * Created by Ace.C on 2016/4/15.
 */
var core;
(function (core) {
    //是否可以播放音乐
    core.isBackgroundMusic = true;
    //是否可以播放音效
    core.isSoundEffect = true;
    //初始化
    function init(stage) {
        core.stage = stage;
        core.gameManager = GameManager.getInstance();
        core.gameManager.initLayer();
        core.gameManager.initManager();
        H5Core.init(stage);
    }
    core.init = init;
})(core || (core = {}));
