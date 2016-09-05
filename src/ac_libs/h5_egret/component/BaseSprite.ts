/**
 * BaseSprite
 * @Author Ace.c
 * @Create 2016-09-05 15:43
 */
class BaseSprite extends eui.Component {

    public data: any;

    public isCreateComplete: boolean = false;

    public constructor() {
        super();
    }

    public childrenCreated(): void {
        super.childrenCreated();

        this.isCreateComplete = true;
    }
}