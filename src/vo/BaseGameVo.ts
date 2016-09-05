/**
 * BaseGameVo
 * @Author Ace.c
 * @Create 2016-09-05 15:44
 */
class BaseGameVo extends BaseVo {

    //游戏管理器
    public gameManager: GameManager;

    //ID
    public id: any;
    //名字
    public name: string = "";
    //描述
    public description: string = "";
    //图标
    public icon: string;
    //类型
    public type: number;
    //等级
    public level: number = 1;
    //品质
    public quality: QualityType = QualityType.white;
    //售价
    public price: number;

    public constructor() {
        super();
        this.gameManager = GameManager.getInstance();
    }
}