export class AcGame{
    constructor(id , AcWingOS){
        this.id = id;
        this.$ac_game = $('#' + id);
        this.AcWingOS = AcWingOS;

        this.settings = new Settings(this);
        this.menu = new AcGameMenu(this);//创建菜单对象
        this.playground = new AcGamePlayground(this);//创建游戏对象

        this.start();
    }

    start(){

    }
}
