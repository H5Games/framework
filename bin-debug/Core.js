/**
 * Created by Ace.C on 2016/4/15.
 */
var core;
(function (core) {
    //�Ƿ񲥷ű�������
    core.isBackgroundMusic = true;
    //�Ƿ񲥷���Ч
    core.isSoundEffect = true;
    //��ʼ��
    function init(stage) {
        core.stage = stage;
        core.gameManager = manager.GameManager.getInstance();
    }
    core.init = init;
})(core || (core = {}));
