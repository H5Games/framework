var KeyValue = (function () {
    function KeyValue(_key, _value) {
        this._key = _key;
        this._value = _value;
    }
    var d = __define,c=KeyValue,p=c.prototype;
    p.getKey = function () {
        return this._key;
    };
    p.getValue = function () {
        return this._value;
    };
    return KeyValue;
}());
egret.registerClass(KeyValue,'KeyValue');
