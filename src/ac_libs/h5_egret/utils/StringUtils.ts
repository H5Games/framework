/**
 * 字符串处理工具
 * @Author Ace.c
 * @Time 2016-08-09 10:22
 */
class StringUtils {

    /**
     * 获取字符长度
     * @param text
     * @returns {number}
     */
    public static getCharLength(text: string): number {
        var len: number = 0;
        for (var i: number = 0; i < text.length; i++) {
            if (text.charCodeAt(i) >= 0 && text.charCodeAt(i) <= 128) {
                len += 1;
            }
            else {
                len += 2;
            }
        }
        return len;
    }

    /**
     * 获取时间字符串
     * @param sec 秒数
     * @returns {string} 00d00h00m00s
     */
    public static getTimeString(sec: number): string {
        sec = sec < 0 ? 0 : sec;
        var d: number = Math.floor(sec / 86400);
        var h: number = Math.floor(sec % 86400 / 3600);
        var m: number = Math.floor(sec % 3600 / 60);
        var s: number = Math.floor(sec % 60);
        var str: string = "";
        if (d > 0) str += (d < 10 ? "0" + d : d) + "d";
        if (h > 0) str += (h < 10 ? "0" + h : h) + "h";
        if (m > 0) str += (m < 10 ? "0" + m : m) + "m";
        if (s > 0) str += (s < 10 ? "0" + s : s) + "s";
        return str;
    }

    /**
     * 获取时间字符串2
     * @param sec 秒数
     * @returns {string} 00:00:00
     */
    public static getTimeString2(sec: number): string {
        sec = sec < 0 ? 0 : sec;
        var h: number = Math.floor(sec / 3600);
        var m: number = Math.floor(sec % 3600 / 60);
        var s: number = Math.floor(sec % 60);
        return (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
    }

    /**
     * 获得值字符串
     * @param value
     * @returns {string} 格式:1,000,000
     */
    public static getValueString(value: number): string {
        var arr: string[] = value.toString().split("");
        var str: string = "";
        var len: number = arr.length;
        for (var i: number = 1; i <= len; i++) {
            str = arr.pop() + str;
            if (i % 3 == 0 && i != len) {
                str = "," + str;
            }
        }
        return str;
    }

    /**
     * 替换字符串
     * @param str
     * @param rep
     * @returns {string}
     */
    public static replaceString(str: string, rep: string): string {
        var reg: RegExp = new RegExp('\{[0-9]\}');
        return str.replace(reg, rep);
    }

    /**
     * 替换非法字符
     * @param str
     * @returns {string}
     */
    public static replaceDirtyWords(str: string): string {
        return DirtyWordUtils.replace(str);
    }

    /**
     * 检索非法字符
     * @param str
     * @returns {boolean}
     */
    public static searchDirtyWords(str: string): boolean {
        return DirtyWordUtils.search(str);
    }

    /**
     * 删除空格
     * @param str
     * @returns {string}
     */
    public static deleteSpace(str: string): string {
        var arr: string[] = str.split("");
        while (arr.indexOf(" ") != -1) {
            arr.splice(arr.indexOf(" "), 1);
        }
        return arr.join("");
    }
}