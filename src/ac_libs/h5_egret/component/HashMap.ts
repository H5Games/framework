
class HashMap {

    private keys: Array<string>;
    private contents: any;

    public constructor() {
        this.keys = new Array();
        this.contents = {};
    }

    public put(key: string, value: any): void {
        if (!this.contents.hasOwnProperty(key)) {
            this.keys.push(key);
        }
        this.contents[key] = value;
    }

    public remove(key: string): any {
        if (this.contents.hasOwnProperty(key)) {
            var obj: any = this.contents[key];
            delete this.contents[key];
            this.delKey(key);
            return obj;
        } else {
            return null;
        }
    }

    public getValue(key: string): any {
        if (this.contents.hasOwnProperty(key)) {
            var obj: any = this.contents[key];
            return obj;
        } else {
            return null;
        }
    }

    private delKey(key: string): void {
        for (var i in this.keys) {
            if (this.keys[i] == key) {
                this.keys.splice(parseInt(i), 1);
            }
        }
    }

    public has(key: string): boolean {
        return this.contents.hasOwnProperty(key);
    }

    public getSize(): number {
        return this.keys.length;
    }

    public getKeys(): Array<string> {
        return this.keys.concat();
    }
}