/**
 * BaseVo
 * @Author Ace.c
 * @Create 2016-09-05 15:42
 */
var BaseVo = (function () {
    function BaseVo() {
    }
    var d = __define,c=BaseVo,p=c.prototype;
    p.update = function (data) {
        if (!data)
            return;
        for (var key in data) {
            if (data[key] == null)
                continue;
            this[key] = data[key];
        }
    };
    return BaseVo;
}());
egret.registerClass(BaseVo,'BaseVo');
