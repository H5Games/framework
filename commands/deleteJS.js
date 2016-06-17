/// <reference path="../lib/types.d.ts" />
var fileUtils = require('../lib/FileUtil');
var deleteJS = function(arg){
};

deleteJS.prototype.execute = function () {
    var options = egret.args;

    var files = fileUtils.search(fileUtils.joinPath(options.projectDir), "js");
    if (!files) {
        trace("==>无效地址!!!");
        return 0;
    }
    if (files.length <= 0) {
        trace("==>未找到可执行文件!!!");
        return 0;
    }
    for (var i = 0; i < files.length; i++) {
        fileUtils.remove(files[i]);
        trace("==>删除文件:" + files[i]);
    }
    trace("==>执行成功!!!");
};

var trace = console.log;

module.exports = deleteJS;
