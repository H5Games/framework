/**
 * 基础物品数据
 * Created by Ace.C on 2016/4/19.
 */
class BaseItemData extends BaseData {
    //最大叠加数量
    public maxCount:number;
    //是否可以叠加
    public isOverlay:boolean;
    //是否可以主动使用
    public isActiveUse:boolean = true;
}