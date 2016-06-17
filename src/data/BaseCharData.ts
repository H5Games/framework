/**
 * 基础角色数据
 * Created by Ace.C on 2016/4/19.
 */
class BaseCharData extends BaseData {
    //模型
    public avatar:string;
    //性别
    public gender:Gender = Gender.unknow;
    //战力
    public power:number;
}