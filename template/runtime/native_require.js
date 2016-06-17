
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
	"bin-debug/a-orz/ACore.js",
	"bin-debug/a-orz/common/CustomEvent.js",
	"bin-debug/a-orz/component/BaseSprite.js",
	"bin-debug/a-orz/component/BaseAlert.js",
	"bin-debug/a-orz/component/BasePanel.js",
	"bin-debug/a-orz/component/BaseScene.js",
	"bin-debug/a-orz/config/EnumType.js",
	"bin-debug/a-orz/config/IllegalChars.js",
	"bin-debug/a-orz/config/TextColor.js",
	"bin-debug/a-orz/data/BaseData.js",
	"bin-debug/a-orz/data/BaseCharData.js",
	"bin-debug/a-orz/data/BaseItemData.js",
	"bin-debug/a-orz/data/BaseMonsterData.js",
	"bin-debug/a-orz/data/BasePlayerData.js",
	"bin-debug/a-orz/manager/BaseManager.js",
	"bin-debug/a-orz/net/Link.js",
	"bin-debug/a-orz/net/LinkByHttp.js",
	"bin-debug/a-orz/net/LinkBySocket.js",
	"bin-debug/a-orz/utils/EffectsUtils.js",
	"bin-debug/a-orz/utils/FactoryUtils.js",
	"bin-debug/a-orz/utils/SoundUtils.js",
	"bin-debug/a-orz/utils/StringUtils.js",
	"bin-debug/a-orz/utils/TestUtils.js",
	"bin-debug/a-orz/utils/TextEffectsUtils.js",
	"bin-debug/AssetAdapter.js",
	"bin-debug/config/IDConfig.js",
	"bin-debug/Core.js",
	"bin-debug/LoadingUI.js",
	"bin-debug/Main.js",
	"bin-debug/manager/AlertManager.js",
	"bin-debug/manager/GameManager.js",
	"bin-debug/manager/PanelManager.js",
	"bin-debug/manager/SceneManager.js",
	"bin-debug/ThemeAdapter.js",
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