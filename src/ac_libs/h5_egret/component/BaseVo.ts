/**
 * BaseVo
 * @Author Ace.c
 * @Create 2016-09-05 15:42
 */
class BaseVo {

    public update(data: any): void {
        if (!data)return;

        for (var key in data) {
            if (data[key] == null)continue;
            this[key] = data[key];
        }
    }
}