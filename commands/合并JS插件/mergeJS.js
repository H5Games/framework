/// <reference path="../lib/types.d.ts" />
var FS = require('fs');
var file = require('../lib/FileUtil');
var mergeJS = function(arg){
	trace('');
}

mergeJS.prototype.execute = function () {
	//当前目录
	var cmdPath = egret.args.projectDir;

	var mergeOtherLibs = true;

	//找index.html和相关的js库，main.min.js不参与
	var indexHtml = cmdPath + "index.html";
	if(!file.exists(indexHtml)){
		trace('找不到index.html -_-#');
		return 0;
	}
	
	//index.html的内容
	var indexCode = file.read(indexHtml, true);
	var key = '<script egret="lib" src="';//查找关键字
	var key2 = '"></script>';
	var key3 = '<!--other_libs_files_start-->';
	var key4 = '<!--other_libs_files_end-->';

	var arr = indexCode.split(key);
	
	//找到所有的js文件
	var jsFiles = [];
	for(var i = 1; i < arr.length; i++){
		var jsFile = arr[i];
		var key2Index = jsFile.indexOf(key2);
		if(key2Index != -1){
			jsFile = jsFile.substr(0, key2Index);

			if(!file.exists(cmdPath + jsFile)){
				trace('找不到 '+jsFile+' -_-#');
				return 0;
			}
			jsFiles.push(jsFile);
		}
	}

	if(mergeOtherLibs){
		var key3Index = indexCode.indexOf(key3);
		var key4Index = indexCode.indexOf(key4);

		if(key3Index == -1 || key4Index == -1){
			trace('没有找到 other_libs_files 标识，忽略合并');
		}else{
			var otherLibsCode = indexCode.substring(key3Index +key3.length , key4Index);
			var reg = new RegExp(' ', 'g');
			otherLibsCode = otherLibsCode.replace(reg, '');
			reg = new RegExp('\t', 'g');
			otherLibsCode = otherLibsCode.replace(reg, '');
			reg = new RegExp('"', 'g');
			otherLibsCode = otherLibsCode.replace(reg, '');
			reg = new RegExp("'", 'g');
			otherLibsCode = otherLibsCode.replace(reg, '');
			reg = new RegExp("/>", 'g');
			otherLibsCode = otherLibsCode.replace(reg, '>');

			var key5 = 'src=';
			var key6 = '.js>';

			var tmpArr = otherLibsCode.split(key5);

			for(var i = 0; i < tmpArr.length; i++){
				var key6Index = tmpArr[i].indexOf(key6);

				if(key6Index != -1){
					jsFiles.push(tmpArr[i].substr(0, key6Index) + ".js");
				}
			}
		}
	}

	if(jsFiles <= 1){
		trace('一共'+jsFiles.length+' 个JS文件，无需合并');
		return 0;
	}

	trace('预计可以合并 '+jsFiles.length+' 个JS文件');
	trace('开始处理...');

	
	var mergeedJS = '';

	for(var i=0;i < jsFiles.length; i++){
		var jsCode = file.read(cmdPath + jsFiles[i], true);

		mergeedJS += '\n //' + jsFiles[i]+ '\n' + jsCode + '\n'; 
	}

	file.save(cmdPath+'merged.js', mergeedJS);
	
	//头尾的index.html代码
	var indexHtmlPre = arr[0] + key;
	var indexHtmlEnd = arr[arr.length-1];
	indexHtmlEnd = indexHtmlEnd.substr(indexHtmlEnd.indexOf(key2));

	
	var newHtml = indexHtmlPre + 'merged.js' + indexHtmlEnd;

	if(mergeOtherLibs){
		var key3Index = newHtml.indexOf(key3);
		var key4Index = newHtml.indexOf(key4);
		var ctx = newHtml.substring(key3Index + key3.length, key4Index);
		newHtml = newHtml.replace(ctx, '');
	}

	file.save(cmdPath+'index_merged.html', newHtml);

	trace('合并成功@@@@@');
	return 0;
};

var trace = console.log;

module.exports = mergeJS;