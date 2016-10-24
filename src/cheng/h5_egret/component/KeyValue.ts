class KeyValue {
    private _key: any;
    private _value: any;

    public constructor(_key: any, _value: any) {
        this._key = _key;
        this._value = _value;
    }

    public getKey(): any {
        return this._key;
    }

    public getValue(): any {
        return this._value;
    }
}