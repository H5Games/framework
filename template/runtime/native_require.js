
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/game/game.js",
	"libs/modules/game/game.native.js",
	"libs/modules/res/res.js",
	"libs/modules/eui/eui.js",
	"libs/modules/tween/tween.js",
	"libs/modules/socket/socket.js",
	"libs/modules/neoges_lib/neoges_lib.js",
	"bin-debug/AssetAdapter.js",
	"bin-debug/cheng/h5_egret/component/BaseSprite.js",
	"bin-debug/cheng/h5_egret/component/HashMap.js",
	"bin-debug/cheng/h5_egret/component/KeyValue.js",
	"bin-debug/cheng/h5_egret/constant/CommonConst.js",
	"bin-debug/cheng/h5_egret/constant/CommonKey.js",
	"bin-debug/cheng/h5_egret/constant/CommonType.js",
	"bin-debug/cheng/h5_egret/event/CommonEvent.js",
	"bin-debug/cheng/h5_egret/H5Core.js",
	"bin-debug/cheng/h5_egret/manager/HttpManager.js",
	"bin-debug/cheng/h5_egret/net/Link.js",
	"bin-debug/cheng/h5_egret/net/LinkByHttp.js",
	"bin-debug/cheng/h5_egret/net/LinkBySocket.js",
	"bin-debug/cheng/h5_egret/net/socket/Socket.js",
	"bin-debug/cheng/h5_egret/utils/CommonUtils.js",
	"bin-debug/cheng/h5_egret/utils/CountUtils.js",
	"bin-debug/cheng/h5_egret/utils/DirtyWordUtils.js",
	"bin-debug/cheng/h5_egret/utils/EffectsUtils.js",
	"bin-debug/cheng/h5_egret/utils/FactoryUtils.js",
	"bin-debug/cheng/h5_egret/utils/FormulaUtils.js",
	"bin-debug/cheng/h5_egret/utils/LogUtils.js",
	"bin-debug/cheng/h5_egret/utils/StorageUtils.js",
	"bin-debug/cheng/h5_egret/utils/StringUtils.js",
	"bin-debug/cheng/h5_egret/utils/TestUtils.js",
	"bin-debug/cheng/h5_egret/utils/TextEffectsUtils.js",
	"bin-debug/cheng/h5_egret/vo/BaseVo.js",
	"bin-debug/cheng/h5_egret/vo/BaseCharVo.js",
	"bin-debug/constant/EventType.js",
	"bin-debug/Core.js",
	"bin-debug/LoadingUI.js",
	"bin-debug/Main.js",
	"bin-debug/manager/BaseManager.js",
	"bin-debug/manager/AlertManager.js",
	"bin-debug/manager/GameManager.js",
	"bin-debug/manager/PanelManager.js",
	"bin-debug/manager/SceneManager.js",
	"bin-debug/ThemeAdapter.js",
	"bin-debug/utils/GameUtils.js",
	"bin-debug/view/GameSprite.js",
	"bin-debug/view/alert/BaseAlert.js",
	"bin-debug/view/panel/BasePanel.js",
	"bin-debug/view/scene/BaseScene.js",
	"bin-debug/vo/BaseGameVo.js",
	"bin-debug/vo/CharVo.js",
	"bin-debug/vo/ItemVo.js",
	"bin-debug/vo/UserVo.js",
	//----auto game_file_list end----
];

var window = this;

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    egret_native.requireFiles();
    egret.TextField.default_fontFamily = "/system/fonts/DroidSansFallback.ttf";
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "noBorder",
		contentWidth: 480,
		contentHeight: 800,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:30,textColor:0x00c200,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel(egret.TextField.default_fontFamily, 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};