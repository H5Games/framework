var HashMap = (function () {
    function HashMap() {
        this.keys = [];
        this.contents = {};
    }
    var d = __define,c=HashMap,p=c.prototype;
    p.put = function (key, value) {
        if (!this.contents.hasOwnProperty(key)) {
            this.keys.push(key);
        }
        this.contents[key] = value;
    };
    p.remove = function (key) {
        if (this.contents.hasOwnProperty(key)) {
            var obj = this.contents[key];
            delete this.contents[key];
            this.delKey(key);
            return obj;
        }
        else {
            return null;
        }
    };
    p.getValue = function (key) {
        if (this.contents.hasOwnProperty(key)) {
            return this.contents[key];
        }
        else {
            return null;
        }
    };
    p.delKey = function (key) {
        for (var i in this.keys) {
            if (this.keys[i] == key) {
                this.keys.splice(parseInt(i), 1);
            }
        }
    };
    p.has = function (key) {
        return this.contents.hasOwnProperty(key);
    };
    p.getSize = function () {
        return this.keys.length;
    };
    p.getKeys = function () {
        return this.keys.concat();
    };
    return HashMap;
}());
egret.registerClass(HashMap,'HashMap');
